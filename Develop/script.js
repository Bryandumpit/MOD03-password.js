// Assignment code here

/* PSEUDOCODE:
When button is clicked, several prompts:
- prompt 1: password length
  - password length of 8 to 128
- prompt 2(so on): character types
  - lowercase
  - uppercase
  - numeric
  - and/or special characters

  input should be validated and at least one character type should be selected
when all prompts are answered, generate password

password is then displayed by alert or in the textarea #password.
*/

//lowercase: abcdefghijklmnopqrstuvwxyz
//uppercase: ABCDEFGHIJKLMNOPQRSTUVWXYZ
//numeric: 0123456789
//special characters: ~`!@#$%^&*()-_+={}[]|:;'<>,.?

//prompts user for password length
var length;
var pass;

var passwordLength = function() {
  length = window.prompt("Please indicate how long the password should be from 8 to 128 characters.")

  if (length<8 || length>128) {
    window.alert("Please provide a valid length for your password from 8 to 128 characters.");
    passwordLength();
  }

  if (length>8 && length <128) {
      return length;
  }
};

//prompt user for which character types to include

var charSet={
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  symbols: "~`!@#$%^&*()-_+={}[]|:;'<>,.?",

}

var passwordCharType = function () {
  var passwordCharSet = "";

  var lower = window.confirm("Would you like to use lowercase letters?");
  if (lower) {
      passwordCharSet += charSet.lowerCase;
  };

  var upper = window.confirm("Would you like to use uppercase letters?");
  if (upper) {
      passwordCharSet += charSet.upperCase;
  };

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
      passwordCharSet += charSet.symbols;
  };

  var numeric = window.confirm("Would you like to use numbers?");
  if (numeric) {
      passwordCharSet += charSet.numeric;
  };

  
  //validate and concatenate
  if (lower || upper || symbols || numeric) {
    pass = "";
    
    for (var i = 0; i < length; i++) {
    pass += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    
  } else{
        window.alert ("Please select at least one of lowercase, uppercase, symbols and/or numbers")
        passwordCharType();
    }
    //confirms a password is generated based on conditions above
   return pass;

};



//placeholder task for generatePassword() 

var generatePassword = function() {
  passwordLength();
  passwordCharType();
  return pass; 
};




// Identifies the generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button: upon click, runs writePassword
generateBtn.addEventListener("click", writePassword);

