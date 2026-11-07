// Q8: Custom Dropdown without using the select tag

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = `
        <h2>Custom Dropdown</h2>

        <div id="dropdown" style="position:relative; width:220px">

            <button id="dropdownButton">
                Select an option ▼
            </button>

            <div id="dropdownOptions" hidden
                style="position:absolute; background:white;
                border:1px solid gray; width:100%">

                <button class="option">HTML</button>
                <button class="option">CSS</button>
                <button class="option">JavaScript</button>
                <button class="option">Python</button>

            </div>
        </div>

        <p id="selectedOption">No option selected.</p>
    `;

    const dropdown = document.getElementById("dropdown");
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownOptions = document.getElementById("dropdownOptions");
    const selectedOption = document.getElementById("selectedOption");

    // Show or hide dropdown options.
    dropdownButton.addEventListener("click", () => {
        dropdownOptions.hidden = !dropdownOptions.hidden;
    });

    // Update button text when an option is selected.
    dropdownOptions.addEventListener("click", (event) => {
        if (event.target.classList.contains("option")) {
            const selectedValue = event.target.textContent;

            dropdownButton.textContent = `${selectedValue} ▼`;

            selectedOption.textContent =
                `Selected: ${selectedValue}`;

            dropdownOptions.hidden = true;
        }
    });

    // Capturing phase handles outside clicks.
    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) {
            dropdownOptions.hidden = true;
        }
    }, true);
});