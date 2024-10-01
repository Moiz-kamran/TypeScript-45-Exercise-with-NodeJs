// Creating a Array
var userNames = ["Osama", "Faisal", "Admin", "Sarim", "Haris"];
// Using ForEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("\nHello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("\nHello ".concat(oneUser, ", thank you for logging in again."));
    }
});
