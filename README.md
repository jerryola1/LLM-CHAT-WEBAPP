# LLM Chat WebApp

LLM Chat WebApp is a web application that enables users to interact with a Language Learning Model (LLM) through a chat interface. It provides a simple and intuitive way to communicate with the LLM and receive real-time responses.

## Features

- Chat interface for seamless interaction with the LLM
- Real-time streaming of LLM responses
- Utilizes the Groq SDK for communication with the LLM API
- Retro-style UI with customizable fonts and colors
- Responsive design for optimal viewing on various devices

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Groq SDK

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js 
- npm 

## Installation

1. Clone the repository:
<pre><code onclick="navigator.clipboard.writeText(this.textContent)">git clone https://github.com/your-username/llm-chat-webapp.git</code></pre>


2. Navigate to the project directory:<pre><code onclick="navigator.clipboard.writeText(this.textContent)">
cd llm-chat-webapp<code><pre>


3. Install the dependencies:<pre><code onclick="navigator.clipboard.writeText(this.textContent)">
npm install<code><pre>


4. Set up the Groq SDK API key:
- Replace `'your-api-key'` with your actual Groq SDK API key in the `server.js` file.

## Usage

1. Start the server:<pre><code onclick="navigator.clipboard.writeText(this.textContent)">
npm start<code><pre>


2. Open your web browser and visit `http://localhost:3000`.

3. Enter your message in the chat input field and click the "Send" button or press Enter.

4. The LLM will process your message and display the response in real-time.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Groq](https://www.groq.com/) for providing the LLM API and SDK.
- [Express.js](https://expressjs.com/) for the web application framework.
- [Node.js](https://nodejs.org/) for the runtime environment.