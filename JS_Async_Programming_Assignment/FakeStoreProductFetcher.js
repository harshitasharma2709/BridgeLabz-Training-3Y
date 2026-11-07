// Q6: Fetch and display products from Fake Store API.

const apiUrl = "https://fakestoreapi.com/products";

// Async function to fetch product data.
async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);

        // Check whether the API response is successful.
        if (!response.ok) {
            throw new Error("API request failed.");
        }

        const products = await response.json();

        // Display product details.
        products.forEach((product) => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("-----------------------------");
        });

    } catch (error) {
        console.log(
            "Failed to load products. Please try again."
        );
    }
}

// Call the function.
fetchProducts();