// Q1: Student Result Processing using reduce() and Classes

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

// Test the class for three students.
const students = [
    new Student("Aarav", [85, 90, 88, 80]),
    new Student("Priya", [70, 65, 72, 68]),
    new Student("Rohan", [30, 35, 40, 32])
];

students.forEach(student => {
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("----------------");
});