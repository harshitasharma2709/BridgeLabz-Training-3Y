"use strict";

// Create the registration form dynamically
document.body.innerHTML = `
    <h2>Student Registration Form</h2>
    <form id="studentForm">
        <label>Name:</label>
        <input id="name" type="text" required>
        <span id="nameError"></span>
        <br><br>

        <label>Email:</label>
        <input id="email" type="text" required>
        <span id="emailError"></span>
        <br><br>

        <label>Phone:</label>
        <input id="phone" type="text" required>
        <span id="phoneError"></span>
        <br><br>

        <label>Password:</label>
        <input id="password" type="password" required>
        <span id="passwordError"></span>
        <br><br>

        <button type="submit">Register</button>
    </form>
    <p id="result"></p>
`;

// Validation patterns
const namePattern = /^[A-Za-z]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{10}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/;

// Validate form fields
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fields = [
        { id: "name", errorId: "nameError", pattern: namePattern, message: "Name must contain alphabets only." },
        { id: "email", errorId: "emailError", pattern: emailPattern, message: "Enter a valid email." },
        { id: "phone", errorId: "phoneError", pattern: phonePattern, message: "Phone must contain exactly 10 digits." },
        { id: "password", errorId: "passwordError", pattern: passwordPattern, message: "Password needs uppercase, number and special character." }
    ];

    let isValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);
        const valid = field.pattern.test(input.value);

        input.style.border = valid ? "2px solid green" : "2px solid red";
        error.style.color = "red";
        error.textContent = valid ? "" : field.message;

        if (!valid) isValid = false;
    });

    document.getElementById("result").textContent =
        isValid ? "Registration successful!" : "Please correct the errors.";
    console.log(isValid ? "Registration successful!" : "Validation failed.");
});