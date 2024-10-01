let guestList = ["Osama", "Faisal", "Haris", "Hassan"];
let dontCome = guestList[2];
console.log(dontCome, "Nai Ahh Sakta");
guestList.splice(2, 1, "Sarim");
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me?`));

