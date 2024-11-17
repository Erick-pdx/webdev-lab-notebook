// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

document.getElementById("copy").onclick = () => {
  let userInput = document.getElementById("userInput1");
  let output = document.getElementById("output");

  output.textContent = userInput.value;
};

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector("#userInput2");

// add an event listener on the target element
userInput2.addEventListener("input", handleInput);

let element = document.createElement("div");
element.setAttribute("class", "output");
document.querySelector("#inputEventExample").append(element);

// callback function to handle event
function handleInput(event) {
  console.log("click event", event);
  element.textContent = userInput2.value;
}
