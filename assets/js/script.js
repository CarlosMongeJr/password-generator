var generateBtn = document.querySelector("#generate");

function randomNum(min, max) {
    if (!max) {
      max = min
      min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}
  
function getRandomItem(list) {
    return list[randomNum(list.length)]
}

function generatePassword() {

    var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var numericCharacters =   ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacters =   ["?", "+", "!", "@", "#", "$", "%", "^", "&", "*"];
    var selectedCharacters = [];

    var passwordLength = parseInt( window.prompt("how many letters should your password be?") );

    if(isNaN(passwordLength)){
        window.alert("Password must be provided as a number");
        return;
    } else if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be between 8 and 128 charactes");
        return;
    };

    var userWantsLowercase = window.confirm("Whould you like to include lowercase letters in your password?");
    var userWantsUppercase = window.confirm("Whould you like to include uppercase letters in your password?");
    var userWantsNumbers = window.confirm("Whould you like to include numbers in your password?");
    var userWantsSymbols = window.confirm("Whould you like to include symbols in your password?");

    if (userWantsLowercase) {
        selectedCharacters.push(lowercaseCharacters)
    }

    if (userWantsUppercase) {
        selectedCharacters.push(uppercaseCharacters)
    }

    if (userWantsNumbers) {
        selectedCharacters.push(numericCharacters)
    }

    if (userWantsSymbols) {
        selectedCharacters.push(specialCharacters)
    }

    if (selectedCharacters.length === 0){
        window.alert("You must select at least one character type");
        return;
    }
    // logs all characters of specific arrays selected
    console.log(selectedCharacters); 

    var generatedPassword = "";

    for (var i=0; i<passwordLength; i++){
        var randomList = getRandomItem(selectedCharacters)
        var randomChar = getRandomItem(randomList)
        generatedPassword += randomChar
    };

    return generatedPassword;

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    if (password) {
      passwordText.value = password;
    }
  
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  