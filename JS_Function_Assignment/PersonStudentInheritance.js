// Q5: Constructor function inheritance

// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent prototype method
Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inherit methods from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Child prototype method
Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

// Create a student object
const student = new Student("Harshita", "CSE AI & Data Science");

// Access both parent and child methods
student.showName();
student.showBranch();

// Demonstrate the prototype chain
console.log(
    "Person prototype available:",
    Person.prototype.isPrototypeOf(student)
);