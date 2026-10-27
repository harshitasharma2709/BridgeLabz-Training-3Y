"use strict";

// Create a class to build forms dynamically
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    // Generate form fields using innerHTML
    createForm() {
        let formHTML = `<h2>Dynamic Form</h2><form id="dynamicForm">`;

        this.fields.forEach((field, index) => {
            formHTML += `
                <label>${field.label}</label>
                <input type="${field.type}" id="field${index}" required>
                <br><br>
            `;
        });

        formHTML += `
            <button type="submit">Submit</button>
            </form>
            <p id="formResult"></p>
        `;

        document.body.innerHTML = formHTML;

        document.getElementById("dynamicForm").addEventListener("submit", event => {
            event.preventDefault();
            const formData = this.getFormData();

            document.getElementById("formResult").textContent =
                JSON.stringify(formData);

            console.log("Form Data:", formData);
        });
    }

    // Return all entered values as an object
    getFormData() {
        const data = {};

        this.fields.forEach((field, index) => {
            data[field.label] =
                document.getElementById(`field${index}`).value;
        });

        return data;
    }
}

// Define the required fields
const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "number", label: "Age" }
];

// Create and display the form
const formBuilder = new FormBuilder(fields);
formBuilder.createForm();