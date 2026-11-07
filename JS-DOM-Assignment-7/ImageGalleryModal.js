// Q5: Image Gallery with Modal Preview

document.addEventListener("DOMContentLoaded", () => {
    const imageUrls = [
        "https://picsum.photos/id/1015/700/500",
        "https://picsum.photos/id/1016/700/500",
        "https://picsum.photos/id/1025/700/500",
        "https://picsum.photos/id/1035/700/500",
        "https://picsum.photos/id/1043/700/500",
        "https://picsum.photos/id/1062/700/500"
    ];

    document.body.innerHTML = `
        <h2>Image Gallery</h2>

        <div id="gallery"
            style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px">
        </div>

        <div id="modal" hidden
            style="position:fixed; inset:0; background:#000c;
            display:grid; place-items:center">

            <div id="modalContent"
                style="background:white; padding:15px">

                <button id="closeButton">Close</button>

                <br>

                <img id="preview"
                    style="max-width:80vw; max-height:80vh">
            </div>
        </div>
    `;

    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("modal");
    const preview = document.getElementById("preview");

    // Create six gallery images dynamically.
    imageUrls.forEach((url, index) => {
        const image = document.createElement("img");

        image.src = url;
        image.alt = `Gallery Image ${index + 1}`;

        image.style.width = "100%";
        image.style.height = "160px";
        image.style.objectFit = "cover";
        image.style.cursor = "pointer";

        image.addEventListener("click", () => {
            preview.src = url;
            modal.hidden = false;
        });

        gallery.appendChild(image);
    });

    // Clicking outside the modal closes it.
    modal.addEventListener("click", () => {
        modal.hidden = true;
    });

    // Prevent clicks inside the modal from closing it.
    document.getElementById("modalContent")
        .addEventListener("click", (event) => {
            event.stopPropagation();
        });

    // Close button functionality.
    document.getElementById("closeButton")
        .addEventListener("click", () => {
            modal.hidden = true;
        });
});