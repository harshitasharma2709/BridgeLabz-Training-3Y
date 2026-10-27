"use strict";

// Original user object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Create form for editing user details
document.body.innerHTML = `
    <h2>Edit User Details</h2>
    <form id="userForm">
        <label>Name:</label>
        <input id="name" value="${user.name}" required>
        <br><br>

        <label>Email:</label>
        <input id="email" type="email" value="${user.email}" required>
        <br><br>

        <label>Age:</label>
        <input id="age" type="number" value="${user.age}" min="1" required>
        <br><br>

        <button type="submit">Update User</button>
    </form>

    <h3>Updated User Details</h3>
    <pre id="userDetails"></pre>
`;

// Display the initial object
document.getElementById("userDetails").textContent =
    JSON.stringify(user, null, 2);

// Update object when the form is submitted
document.getElementById("userForm").addEventListener("submit", event => {
    event.preventDefault();

    const newName = document.getElementById("name").value.trim();
    const newEmail = document.getElementById("email").value.trim();
    const newAge = Number(document.getElementById("age").value);

    if (!newName || !Number.isInteger(newAge) || newAge < 1) {
        console.log("Please enter valid user details.");
        return;
    }

    // Update the existing object
    user.name = newName;
    user.email = newEmail;
    user.age = newAge;

    // Show updated details
    document.getElementById("userDetails").textContent =
        JSON.stringify(user, null, 2);

    console.log("Updated User:", user);
});