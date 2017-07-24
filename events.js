console.log ("works");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
let output = document.getElementById("output-target");

document.getElementById("wrapper").addEventListener("click", function(event) {
	output.innerHTML = `<p class="clickedOnText">You clicked on the ${event.target.innerText} section.`;
});
/****************************************************************************************/

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
let headerGrab = document.getElementById("page-title");
headerGrab.addEventListener("mouseover", handleMouseover);
headerGrab.addEventListener("mouseout", handleMouseout);

function handleMouseover(event) {
	output.innerHTML = "You moved your mouse over the header."
};

function handleMouseout(event) {
	output.innerHTML = "You left me!"
};
/****************************************************************************************/

// When you type characters into the input field, the output element should mirror the text in the input field.

let textInput = document.getElementById("keypress-input");
textInput.addEventListener("keyup", mirrorText);

function mirrorText(event) {
	// console.log ("event", event.target.value);
	output.innerHTML = event.target.value;
}
/****************************************************************************************/

let guineapig = document.getElementById("guinea-pig");

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

document.getElementById("add-rounding")
	.addEventListener("click", function(event) {
		guineapig.classList.toggle("roundit");
});
	
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

document.getElementById("add-color")
    .addEventListener("click", function(event) {
		guineapig.classList.toggle("add-color");
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

document.getElementById("make-large")
	.addEventListener("click", function(event) {
		guineapig.classList.toggle("hulkifyit");
});


// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

document.getElementById("add-border")
	.addEventListener("click", function(event) {
		guineapig.classList.toggle("captureit");
});

/****************************************************************************************/

// The first section's text should be bold. (See CSS)
// The last section's text should be bold and italicized. (See CSS)
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.