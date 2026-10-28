// Q3: Arrow function and this

const user = {
    name: "Harshita",

    // Arrow functions do not get their own this
    showName: () => {
        console.log("Arrow function name:", this.name);
    }
};

user.showName(); // Usually undefined in this context

// Fix: use a normal function to access the object's this
user.showName = function () {
    console.log("Normal function name:", this.name);
};

user.showName(); // Harshita