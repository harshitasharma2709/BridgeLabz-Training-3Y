// Q3: Multi-Step Form with Next, Back and Validation

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = `
        <h2>Registration Form</h2>

        <p id="stepLabel"></p>

        <form id="registrationForm" novalidate>

            <section>
                <label>Name:</label>
                <input type="text" id="name">
            </section>

            <section hidden>
                <label>Email:</label>
                <input type="email" id="email">
            </section>

            <section hidden>
                <label>Password:</label>
                <input type="password" id="password">
            </section>

            <p id="error" style="color:red"></p>

            <button type="button" id="backButton">Back</button>
            <button type="button" id="nextButton">Next</button>

        </form>

        <div id="summary" hidden></div>
    `;

    const sections = document.querySelectorAll("form section");

    const stepLabel = document.getElementById("stepLabel");
    const error = document.getElementById("error");

    const backButton = document.getElementById("backButton");
    const nextButton = document.getElementById("nextButton");

    let currentStep = 0;

    // Display the current form step.
    function showStep() {
        sections.forEach((section, index) => {
            section.hidden = index !== currentStep;
        });

        const stepNames = ["Name", "Email", "Password"];

        stepLabel.textContent =
            `Step ${currentStep + 1} of 3: ${stepNames[currentStep]}`;

        backButton.hidden = currentStep === 0;

        nextButton.textContent =
            currentStep === 2 ? "Submit" : "Next";

        error.textContent = "";
    }

    // Validate the current input.
    function validateStep() {
        const input = sections[currentStep].querySelector("input");
        const value = input.value.trim();

        if (currentStep === 0 && value.length < 2) {
            error.textContent = "Please enter a valid name.";
            return false;
        }

        if (
            currentStep === 1 &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ) {
            error.textContent = "Please enter a valid email.";
            return false;
        }

        if (currentStep === 2 && value.length < 6) {
            error.textContent =
                "Password must contain at least 6 characters.";
            return false;
        }

        return true;
    }

    // Next button functionality.
    nextButton.addEventListener("click", () => {
        if (!validateStep()) return;

        if (currentStep < 2) {
            currentStep++;
            showStep();
        } else {
            const summary = document.getElementById("summary");

            summary.innerHTML = `
                <h3>Form Summary</h3>
                <p>Name: ${escapeHTML(document.getElementById("name").value)}</p>
                <p>Email: ${escapeHTML(document.getElementById("email").value)}</p>
                <p>Password: Submitted</p>
                <h4>All steps completed successfully!</h4>
            `;

            document.getElementById("registrationForm").hidden = true;
            stepLabel.hidden = true;
            summary.hidden = false;
        }
    });

    // Back button functionality.
    backButton.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep();
        }
    });

    // Escape user input before displaying it as HTML.
    function escapeHTML(value) {
        return value.replace(/[&<>"']/g, (character) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[character]);
    }

    showStep();
});