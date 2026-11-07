// Q2: Live Character Counter with Warning Behavior

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = `
        <h2>Live Character Counter</h2>

        <textarea id="message"
            rows="6"
            cols="45"
            placeholder="Enter your message">
        </textarea>

        <p id="counter">100 characters remaining</p>

        <button id="resetButton">Reset</button>
    `;

    const message = document.getElementById("message");
    const counter = document.getElementById("counter");

    const maximumCharacters = 100;

    // Update remaining character count.
    function updateCounter() {
        const remaining = maximumCharacters - message.value.length;

        counter.textContent = `${remaining} characters remaining`;

        if (remaining === 0) {
            counter.style.color = "red";
        } else if (remaining <= 20) {
            counter.style.color = "yellow";
        } else {
            counter.style.color = "green";
        }
    }

    // Prevent typing after reaching 100 characters.
    message.addEventListener("beforeinput", (event) => {
        if (
            event.inputType.startsWith("insert") &&
            message.value.length >= maximumCharacters
        ) {
            event.preventDefault();
        }
    });

    message.addEventListener("input", updateCounter);

    // Reset button clears everything.
    document.getElementById("resetButton").addEventListener("click", () => {
        message.value = "";
        updateCounter();
    });

    updateCounter();
});