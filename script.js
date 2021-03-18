var minPassLength = 8;

var maxPassLength = 128;

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

var uppercaseLetters = lowercaseLetters.toUpperCase();

var numbersList = "0123456789";

var specChars = "!@#$%^&*()_+{}|:?><[]"
 
function getPasswordOptions() {
    var chars = prompt("How many characters would you like in your password? Y/N");
    
    if (chars == null) {
        alert("Please use numbers")
    }
    var chars2 = parseInt(chars);

    console.log(chars);

    var lowercase = confirm("Would you like to use lowercase letters? Y/N");

    console.log(lowercase);

    var uppercase = confirm("Would you like to use uppercase letters? Y/N");

    console.log(uppercase);

    var num = confirm("Would you like to use numbers? Y/N");

    console.log(num);

    var specialChar = confirm("Would you like to use special characters? Y/N");

    console.log(specialChar);

    var options = {
        chars2,
        lowercase,
        uppercase,
        num,
        specialChar,
    }
    generatePassword(options)
}

function generatePassword(options) {
//looping through the number of characters in password
// player choose 8, 8 characters are needed 
var cup = "";

if (options.lowercase == true) cup=cup.concat(lowercaseLetters)

if (options.uppercase == true) cup=cup.concat(uppercaseLetters)

if (options.num == true) cup=cup.concat(numbersList)

if (options.specialChar == true) cup=cup.concat(specChars)

console.log(cup)

var password = "";

    for (var i = 0; i < options.chars2; i++) {
    password += cup[Math.floor(Math.random()* cup.length)]
    }
    document.getElementById("passwordbox").value = password;
console.log(password)
}





//inject password to page 