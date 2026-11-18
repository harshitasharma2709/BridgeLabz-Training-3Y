// Q4: Employee Inheritance and Runtime Polymorphism

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in ${this.department}.`;
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Override the parent class method.
    work() {
        return `${this.name} manages ${this.department}.`;
    }
}

const employee = new Employee("Aarav", "IT");
const manager = new Manager("Priya", "HR");

// Runtime polymorphism.
const staff = [employee, manager];

staff.forEach(person => {
    console.log(person.work());
});