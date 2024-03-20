// people kept complaining about pixel-y fonts
// ... naturally, I gave them an alternative
window.addEventListener("DOMContentLoaded", applyStyle);

function applyStyle() {
	var font_ibm = document.querySelector("#font_ibm");
	var font_mono = document.querySelector("#font_mono");
	var font_chinacat = document.querySelector("#font_chinacat");
	var font_sansserif = document.querySelector("#font_sansserif");
	var stylesheet = document.querySelector("#font_stylesheet");

	if (localStorage) {
		var meow = localStorage.getItem("meow");
	} else {
		var meow = "font_mono";
	}

	if (meow == "font_mono") {
		font_mono.checked = true;
		stylesheet.setAttribute("href", "/css/font_mono.css");
	} else if (meow == "font_chinacat") {
		font_chinacat.checked = true;
		stylesheet.setAttribute("href", "/css/font_chinacat.css");
	}	else if (meow == "font_sansserif") {
		font_sansserif.checked = true;
		stylesheet.setAttribute("href", "/css/font_sansserif.css");
	}

	function changeStyle(e) {
		var t = e.target.id;
		localStorage.setItem("meow", t);
		if (t == "font_mono") {
			stylesheet.setAttribute("href", "/css/font_mono.css");
		} else if (t == "font_ibm") {
			stylesheet.setAttribute("href", "/css/font_ibm.css");
		} else if (t == "font_chinacat") {
			stylesheet.setAttribute("href", "/css/font_chinacat.css");
		} else if (t == "font_sansserif") {
			stylesheet.setAttribute("href", "/css/font_sansserif.css");
		}
	}
	font_ibm.addEventListener("change", changeStyle);
	font_mono.addEventListener("change", changeStyle);
	font_sansserif.addEventListener("change", changeStyle);
	font_chinacat.addEventListener("change", changeStyle);
}
