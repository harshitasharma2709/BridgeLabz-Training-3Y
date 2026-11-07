// Q6: Real-Time Table Filter using input event

document.addEventListener("DOMContentLoaded", () => {

    // Student data.
    const students = [
        { name: "Aarav Sharma", branch: "CSE", cgpa: 8.4 },
        { name: "Priya Verma", branch: "AI & DS", cgpa: 9.1 },
        { name: "Rohan Singh", branch: "ECE", cgpa: 7.8 },
        { name: "Neha Gupta", branch: "CSE", cgpa: 8.9 },
        { name: "Kabir Khan", branch: "Mechanical", cgpa: 7.5 }
    ];

    document.body.innerHTML = `
        <h2>Student Table Filter</h2>

        <input
            type="text"
            id="searchInput"
            placeholder="Search student">

        <table border="1" cellpadding="10">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>CGPA</th>
                </tr>
            </thead>

            <tbody id="studentTable"></tbody>
        </table>

        <p id="noResults" hidden>No results found</p>
    `;

    const searchInput = document.getElementById("searchInput");
    const studentTable = document.getElementById("studentTable");
    const noResults = document.getElementById("noResults");

    // Display students in the table.
    function displayStudents(studentList) {
        studentTable.innerHTML = "";

        studentList.forEach((student) => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = student.name;

            const branchCell = document.createElement("td");
            branchCell.textContent = student.branch;

            const cgpaCell = document.createElement("td");
            cgpaCell.textContent = student.cgpa;

            row.append(nameCell, branchCell, cgpaCell);

            studentTable.appendChild(row);
        });

        noResults.hidden = studentList.length !== 0;
    }

    // Filter students while typing.
    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase().trim();

        const filteredStudents = students.filter((student) => {
            return (
                student.name.toLowerCase().includes(searchText) ||
                student.branch.toLowerCase().includes(searchText) ||
                String(student.cgpa).includes(searchText)
            );
        });

        displayStudents(filteredStudents);
    });

    // Display all students initially.
    displayStudents(students);
});