// 1. Change text content dynamically when button is clicked
document.getElementById("changeTextButton").addEventListener("click", function() {
    const textElement = document.getElementById("textContent");
    textElement.textContent = "The text has been changed dynamically!";
    textElement.classList.add("changed-text");  // Add a class to change text style
});

// 2. Modify CSS styles dynamically when button is clicked
document.getElementById("changeStyleButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "#f0f8ff";  // Change body background color
    document.body.style.color = "darkslategray";       // Change text color
});

// 3. Add or remove a new element when the button is clicked
document.getElementById("toggleElementButton").addEventListener("click", function() {
    const container = document.getElementById("newElementContainer");

    // Check if the element already exists and toggle
    if (container.children.length === 0) {
        const newElement = document.createElement("div");
        newElement.classList.add("new-element");
        newElement.textContent = "This is a new element added dynamically!";
        container.appendChild(newElement); // Add new element
    } else {
        container.innerHTML = ""; // Remove the new element
    }
});
