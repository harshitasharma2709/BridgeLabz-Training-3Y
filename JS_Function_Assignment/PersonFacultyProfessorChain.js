// Q6: Multi-level prototype inheritance

// Person constructor
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

// Faculty constructor
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};

// Professor constructor
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};

// Create professor object
const professor = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "JavaScript"
);

// Access methods from all three levels
professor.showName();
professor.showDepartment();
professor.showSubject();

// Verify the prototype chain
console.log(
    "Person prototype:",
    Person.prototype.isPrototypeOf(professor)
);
console.log(
    "Faculty prototype:",
    Faculty.prototype.isPrototypeOf(professor)
);