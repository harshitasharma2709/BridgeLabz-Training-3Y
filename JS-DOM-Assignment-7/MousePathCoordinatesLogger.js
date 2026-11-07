// Q7: Detect Mouse Coordinates and Double Click Position

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = `
        <h2>Mouse Coordinates Logger</h2>

        <p id="coordinates">
            Move your mouse inside the box.
        </p>

        <div id="trackingBox"
            style="width:400px; height:400px;
            border:2px solid black;
            position:relative;
            background-color:#f4f4f4">
        </div>

        <p>Double-click inside the box to place a red dot.</p>
    `;

    const trackingBox = document.getElementById("trackingBox");
    const coordinates = document.getElementById("coordinates");

    // Track mouse movement inside the box.
    trackingBox.addEventListener("mousemove", (event) => {
        coordinates.textContent =
            `clientX: ${event.clientX}, clientY: ${event.clientY}`;
    });

    // Place a red dot on double-click.
    trackingBox.addEventListener("dblclick", (event) => {
        const boxBounds = trackingBox.getBoundingClientRect();

        const positionX = event.clientX - boxBounds.left;
        const positionY = event.clientY - boxBounds.top;

        const redDot = document.createElement("span");

        redDot.style.position = "absolute";
        redDot.style.width = "12px";
        redDot.style.height = "12px";
        redDot.style.backgroundColor = "red";
        redDot.style.borderRadius = "50%";

        redDot.style.left = `${positionX}px`;
        redDot.style.top = `${positionY}px`;

        redDot.style.transform = "translate(-50%, -50%)";
        redDot.style.pointerEvents = "none";

        trackingBox.appendChild(redDot);
    });
});