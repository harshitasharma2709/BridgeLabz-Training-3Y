"use strict";

// Create booking form
document.body.innerHTML = `
    <h2>Movie Ticket Booking</h2>
    <form id="bookingForm">
        <label>Name:</label>
        <input id="name" required>
        <br><br>

        <label>Email:</label>
        <input id="email" required>
        <br><br>

        <label>Seats (1-10):</label>
        <input id="seats" type="number" min="1" max="10" required>
        <br><br>

        <button type="submit">Book Ticket</button>
    </form>
    <p id="bookingResult"></p>
`;

// Validation patterns
const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate and save the booking
document.getElementById("bookingForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);
    const result = document.getElementById("bookingResult");

    if (!nameRegex.test(name)) {
        result.textContent = "Name must contain alphabets only.";
    } else if (!emailRegex.test(email)) {
        result.textContent = "Please enter a valid email.";
    } else if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        result.textContent = "Seats must be between 1 and 10.";
    } else {
        // Store successful booking details
        const booking = { name, email, seats };

        result.textContent =
            `Booking Successful! Name: ${booking.name}, ` +
            `Email: ${booking.email}, Seats: ${booking.seats}`;

        console.log("Ticket Details:", booking);
    }
});