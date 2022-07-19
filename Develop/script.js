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
var passLength = function(){
  var length = window.prompt ("Please indicate the length of the password from 8 to 128 characters?")
  if (length<8 || length>128){
    window.alert("Please select a valid length from 8 to 128 characters");
    return passLength();
  } else{
      return length;
  }
}

//placeholder task for generatePassword() 
var generatePassword = function() {
  console.log("Hello!")
}



// Identifies the generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passLength();
  console.log(length);
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

