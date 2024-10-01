// Creating a Guest List Array
let guestList = ["Osama", "Faisal", "Haris", "Hassan"];

// Making variable for those guest who cant come
let dontCome = guestList[2];

// Print the Name of Guest Who cant come
console.log(dontCome, "Nahi Ahh Sakta Hai");

// Add or Remove Values for Guest List Array
guestList.splice(2,1,"Sarim");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table for Dinner");

// Adding a new guest at starting index of array 
guestList.unshift("Moiz");

// Adding a new guest at ending index of array
guestList.push("Kamran");

// Making a variable for storing a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Tabish");

// Print Message for Updated list
console.log("Updated List of our Guest");

// Sending a invitation message to our message one by one with their names
guestList.forEach(guestOne => console.log(`Salam ${guestOne}, would you like to Dinner with me`));

// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

// Using While-loop to remove guests from the array until only two names remain
while(guestList.length > 2){
let removedguest = guestList.pop();
console.log(`Sorry, ${removedguest} I cant invite you to dinner`);
}
// Sending a invitations to the last two guests on the lists
console.log("Invitation to the last 2 Guests");
guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo}, you are still invited to Dinner`));

// Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);


