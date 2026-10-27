"use strict";

// Create login form
document.body.innerHTML = `
    <h2>Login Form</h2>
    <form id="loginForm">
        <label>Username:</label>
        <input id="username" required>
        <br><br>

        <label>Password:</label>
        <input id="password" type="password" required>
        <br><br>

        <button type="submit">Login</button>
    </form>
    <p id="message"></p>
`;

// Define validation patterns
const usernameRegex = /^.{5,}$/;
const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;

// Validate login details
document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const errors = [];

    if (!usernameRegex.test(username)) {
        errors.push("Username must contain at least 5 characters.");
    }

    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain an uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain a lowercase letter.");
    }
    if (!/\d/.test(password)) {
        errors.push("Password must contain a number.");
    }
    if (!/[^A-Za-z0-9\s]/.test(password)) {
        errors.push("Password must contain a special character.");
    }

    if (errors.length > 0) {
        message.style.color = "red";
        message.textContent = errors.join(" ");
        console.log("Login failed:", errors);
    } else {
        message.style.color = "green";
        message.textContent = "Login validation successful!";
        console.log("Login validation successful!");
    }
});