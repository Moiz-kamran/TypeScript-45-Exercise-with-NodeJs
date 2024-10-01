// Creating a Array
let userNames = ["Osama", "Faisal", "Admin", "Sarim", "Haris"];

// Using ForEach Loop on Array

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
console.log(`\nHello ${oneUser}, would you like to see a status report?`);

    }else{
    console.log(`\nHello ${oneUser}, thank you for logging in again.`);
}
})



