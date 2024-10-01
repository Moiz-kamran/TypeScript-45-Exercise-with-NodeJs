// Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians name
var magician_names = ["Harry Poter", "Criss Angle", "Dynamo"];
// Call the function to print each magicians names
show_magicians(magician_names);
