// Define a function to create a car object with optional options ...
function create_car (manufacturer, model, ...options){

// Initialize a car object with manufacturer and model
let car ={
    manufacturer: manufacturer,
    model: model
};

// Add Additional options to the car object
options.forEach(option => {
let [key, value] = option.split(":");
car [key.trim()] = value.trim();

});

return car;

}

// Call the function to create a car object
let my_car = create_car("Toyata", "Corolla" , "Color : Black", "Sunroof : True", "Year : 2024");

// Print the variable to ensure all the information is stored correctly in the car object.
console.log(my_car);
