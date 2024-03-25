require('dotenv').config();
const express = require('express');
const path = require('path');
const Groq = require('groq-sdk');

const app = express();
const port = 3000;
const conversationHistory = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.userMessage;

    // Add the user message to the conversation history
    conversationHistory.push({ role: 'user', content: userMessage });

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    try {
        const stream = await groq.chat.completions.create({
            messages: conversationHistory,
            model: 'mixtral-8x7b-32768',
            temperature: 0.5,
            max_tokens: 1024,
            top_p: 1,
            stop: null,
            stream: true,
        });

        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
        });

        for await (const chunk of stream) {
            const { content } = chunk.choices[0].delta;
            if (content) {
                res.write(`data: ${content}\n\n`);
            }
        }

        res.write(`data: [DONE]\n\n`);
        res.end();

        // Add the assistant response to the conversation history
        const assistantResponse = conversationHistory[conversationHistory.length - 1].content;
        conversationHistory.push({ role: 'assistant', content: assistantResponse });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});