// Q9: Compare prototype inheritance and ES6 class inheritance

// Prototype-based version
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

// ES6 class-based version
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

// Create objects using both approaches
const prototypeStudent = new Student("Harshita", "CSE AI & Data Science");
const classStudent = new StudentClass("Harshita", "CSE AI & Data Science");

// Test prototype-based inheritance
console.log("Prototype-Based Version:");
prototypeStudent.showName();
prototypeStudent.showBranch();

// Test class-based inheritance
console.log("ES6 Class-Based Version:");
classStudent.showName();
classStudent.showBranch();