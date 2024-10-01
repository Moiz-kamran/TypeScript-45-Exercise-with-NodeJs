var guestList = ["Osama", "Faisal", "Haris", "Hassan"];
var dontCome = guestList[2];
console.log(dontCome, "Nai Ahh Sakta");
guestList.splice(2, 1, "Sarim");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to Dinner with me?")); });
