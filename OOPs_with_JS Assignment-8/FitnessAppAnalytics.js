// Q9: Fitness App Analytics using filter(), reduce() and map()

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.data = data;
    }

    // Get users with more than 7000 steps.
    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    // Calculate average calories using reduce().
    getAverageCalories() {
        const total = this.data.reduce(
            (sum, user) => sum + user.calories,
            0
        );

        return total / this.data.length;
    }

    // Format user information using map().
    getUserSummary() {
        return this.data.map(user =>
            `User ${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`
        );
    }
}

// Execute all methods.
try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.log(analytics.getActiveUsers());

    console.log("Average Calories:");
    console.log(analytics.getAverageCalories());

    console.log("User Summary:");
    analytics.getUserSummary().forEach(message => {
        console.log(message);
    });
} catch (error) {
    console.log("Error:", error.message);
}

// Test empty dataset error.
try {
    const emptyAnalytics = new FitnessAnalytics([]);
    console.log(emptyAnalytics.getUserSummary());
} catch (error) {
    console.log("Dataset Error:", error.message);
}