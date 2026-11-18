// Q2: Online Food Ordering using map(), reduce() and Error Handling

const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    // Get prices using map().
    const priceList = orderItems.map(itemName => {
        const item = menu.find(food => food.name === itemName);

        if (!item) {
            throw new Error(`Invalid item: ${itemName}`);
        }

        return item.price;
    });

    // Calculate total using reduce().
    return priceList.reduce((total, price) => total + price, 0);
}

// Valid order
try {
    const order = ["Pizza", "Burger", "Pasta"];
    console.log("Total Bill: Rs.", calculateBill(order));
} catch (error) {
    console.log("Error:", error.message);
}

// Invalid order
try {
    const order = ["Pizza", "Sushi"];
    console.log("Total Bill: Rs.", calculateBill(order));
} catch (error) {
    console.log("Error:", error.message);
}