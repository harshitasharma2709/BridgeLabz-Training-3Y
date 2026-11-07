// Q1: Dynamic Product List Manager using Event Delegation

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = `
        <h2>Product List Manager</h2>
        <input id="productInput" placeholder="Enter product name">
        <button id="addButton">Add Product</button>
        <ul id="productList"></ul>
    `;

    const productInput = document.getElementById("productInput");
    const productList = document.getElementById("productList");

    // Add a new product
    document.getElementById("addButton").addEventListener("click", () => {
        const productName = productInput.value.trim();

        if (productName === "") {
            alert("Please enter a product name.");
            return;
        }

        const listItem = document.createElement("li");
        const nameSpan = document.createElement("span");

        nameSpan.className = "productName";
        nameSpan.textContent = productName;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.dataset.action = "edit";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.action = "delete";

        listItem.append(nameSpan, editButton, deleteButton);
        productList.appendChild(listItem);

        productInput.value = "";
    });

    // Event delegation: parent handles Edit and Delete buttons.
    productList.addEventListener("click", (event) => {
        const listItem = event.target.closest("li");

        if (!listItem) return;

        if (event.target.dataset.action === "delete") {
            listItem.remove();
        }

        if (event.target.dataset.action === "edit") {
            if (listItem.querySelector("input")) return;

            const nameSpan = listItem.querySelector(".productName");
            const oldName = nameSpan.textContent;

            const editInput = document.createElement("input");
            editInput.value = oldName;

            nameSpan.replaceWith(editInput);
            editInput.focus();

            // Save edited product name.
            function saveEdit() {
                if (!editInput.isConnected) return;

                nameSpan.textContent = editInput.value.trim() || oldName;
                editInput.replaceWith(nameSpan);
            }

            editInput.addEventListener("blur", saveEdit);

            editInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter") saveEdit();

                if (e.key === "Escape") {
                    editInput.value = oldName;
                    saveEdit();
                }
            });
        }
    });
});