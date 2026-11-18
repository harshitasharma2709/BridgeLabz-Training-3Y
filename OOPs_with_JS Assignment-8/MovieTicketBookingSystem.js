// Q8: Movie Ticket Booking using Inheritance and Prototype Chain

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Add printTicket() to MovieTicket.prototype.
MovieTicket.prototype.printTicket = function() {
    console.log("----- Movie Ticket -----");
    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Price: Rs.", this.price);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

// Create online ticket objects.
const ticket1 = new OnlineTicket("Dangal", "A12", 200, 25);
const ticket2 = new OnlineTicket("3 Idiots", "B08", 250, 30);

// Call parent prototype method using child objects.
ticket1.printTicket();
console.log("Total Amount: Rs.", ticket1.getTotalAmount());

console.log("----------------------");

ticket2.printTicket();
console.log("Total Amount: Rs.", ticket2.getTotalAmount());

// Demonstrate prototype chain.
console.log(
    "Prototype chain:",
    MovieTicket.prototype.isPrototypeOf(ticket1)
);