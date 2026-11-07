// Q9: Form Submit Blocker with Live Validation Errors

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = `
        <h2>Registration Form</h2>

        <form id="userForm" novalidate>

            <label>Name:</label>
            <input type="text" id="name">
            <small id="nameError" style="color:red"></small>

            <br><br>

            <label>Email:</label>
            <input type="text" id="email">
            <small id="emailError" style="color:red"></small>

            <br><br>

            <label>Password:</label>
            <input type="password" id="password">
            <small id="passwordError" style="color:red"></small>

            <br><br>

            <button type="submit">Submit</button>

        </form>

        <p id="successMessage" style="color:green"></p>
    `;

    const userForm = document.getElementById("userForm");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const successMessage = document.getElementById("successMessage");

    // Validate name.
    function validateName() {
        const isValid = nameInput.value.trim() !== "";

        document.getElementById("nameError").textContent =
            isValid ? "" : "Name is required.";

        return isValid;
    }

    // Validate email.
    function validateEmail() {
        const isValid =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());

        document.getElementById("emailError").textContent =
            isValid ? "" : "Please enter a valid email.";

        return isValid;
    }

    // Validate password.
    function validatePassword() {
        const isValid = passwordInput.value.length >= 6;

        document.getElementById("passwordError").textContent =
            isValid ? "" : "Password must be at least 6 characters.";

        return isValid;
    }

    // Remove errors automatically when the user corrects input.
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);

    // Handle form submission.
    userForm.addEventListener("submit", (event) => {
        // Prevent default form submission.
        event.preventDefault();

        const nameValid = validateName();
        const emailValid = validateEmail();
        const passwordValid = validatePassword();

        if (nameValid && emailValid && passwordValid) {
            successMessage.textContent =
                "Form Submitted Successfully";

            userForm.reset();

            // Clear all validation messages.
            document.querySelectorAll("small").forEach((error) => {
                error.textContent = "";
            });
        } else {
            successMessage.textContent = "";
        }
    });
});