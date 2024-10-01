// Array of Current Users
let current_users = ["Osama", "Haris", "Hassan", "Faisal", "Sarim"]

// Array of New Users
let new_users = ["Moiz", "Hani", "Mishal", "Hassan", "Osama" ]

// Make sure your comparison is case insensitive. If 'Jhon' has been used, 'JHON' should not be accepted.

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {

    // Making a Condition for username already exist and save in our condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // Print Different message using If-Else statements
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);
    }else{
        console.log(`This Username ${new_one_user} is available`);
        
    }
})
