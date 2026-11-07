// Q4: Theme Switcher using setAttribute()

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = `
        <h2>Theme Switcher</h2>

        <button data-theme="light">Light Theme</button>
        <button data-theme="dark">Dark Theme</button>
        <button data-theme="blue">Blue Theme</button>

        <p id="themeStatus"></p>
    `;

    // Create CSS styles dynamically.
    const style = document.createElement("style");

    style.textContent = `
        body.light {
            background-color: white;
            color: black;
        }

        body.dark {
            background-color: #222;
            color: white;
        }

        body.blue {
            background-color: lightblue;
            color: darkblue;
        }

        button {
            padding: 10px;
            margin: 5px;
            cursor: pointer;
        }
    `;

    document.head.appendChild(style);

    const themeStatus = document.getElementById("themeStatus");

    // Apply the selected theme.
    function applyTheme(themeName) {
        document.body.setAttribute("class", themeName);

        // Store the selected theme in a custom attribute.
        document.body.setAttribute("data-theme", themeName);

        themeStatus.textContent = `Current Theme: ${themeName}`;
    }

    // Handle theme button clicks.
    document.querySelectorAll("button[data-theme]").forEach((button) => {
        button.addEventListener("click", () => {
            const selectedTheme = button.getAttribute("data-theme");

            applyTheme(selectedTheme);
        });
    });

    applyTheme("light");
});