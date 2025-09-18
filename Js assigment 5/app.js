// Extra Question (Password generator)
// function generatePassword() {
  // const length = document.getElementById("length").value || 12;

  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // const numbers = "0123456789";
  // const symbols = "!@#$%^&*()_+{}[]<>?/|";
  
  // const allChars = letters + numbers + symbols;
  // let password = "";

  // for (let i = 0; i < length; i++) {
    // const randomIndex = Math.floor(Math.random() * allChars.length);
    // password += allChars[randomIndex];
  // }

  // document.getElementById("password").innerText = "Generated Password: " + password;
  // return password;

// Chapter 26-30
// Question 1
// var num = prompt("Enter a positive integer:");
// var roundNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + roundNum + "<br>");
// document.write("Floor value: " + floorNum + "<br>");
// document.write("Ceil value: " + ceilNum + "<br>");
// Question 2
// var num = prompt("Enter a negative floating-point number:");
// var roundNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + roundNum + "<br>");
// document.write("Floor value: " + floorNum + "<br>");
// document.write("Ceil value: " + ceilNum + "<br>");
// Question 3
// var num = prompt("Enter a number:");
// var absNum = Math.abs(num);
// document.write("The absolute value of " + num + " is " + absNum);
// Question 4
// var randomNum = Math.random();
// var diceRoll = Math.floor(randomNum * 6) + 1;
// document.write("Random dice value: " + diceRoll);
// Question 5
// var randomNum = Math.random();
// var coinToss = Math.floor(randomNum * 2) + 1;
// var result = (coinToss === 1) ? "Heads" : "Tails";
// document.write("Random coin value: " + result);
// Question 6
// var randomNum = Math.random();
// var randomNum100 = Math.floor(randomNum * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNum100);
// Question 7
// var userWeight = prompt("Enter your weight in kilograms:");
// var weight = parseFloat(userWeight);
// document.write("The weight of user is " + weight + " kilograms");
// Question 8
// var secretNum = Math.floor(Math.random() * 10) + 1;
// var userGuess = prompt("Guess the secret number (between 1 and 10):");
// if (parseInt(userGuess) === secretNum) {
// alert("Congratulations! you guessed the secret number.");
// } else {
// alert("Sorry, the secret number was " + secretNum + ". Try again!");
// }
// var weight = parseFloat(userWeight);
// document.write("The weight of user is " + weight + " kilograms");

// chapter 21-25
// Question 1
// var firstname = prompt("Enter your first name:");
// var lastname = prompt("Enter your last name:");
// var fullname = firstname + " " + lastname;
// alert("Hello, " + fullname + "!");
// Question 2
// var favMobile = prompt("Enter your favorite mobile phone model:");
// var length = favMobile.length;
// document.write("My favorite phone is: " + favMobile + "<br>");
// document.write("Length of string is: " + length);
// Question 3
// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index);
// Question 4
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("L");
// document.write("String: " + word + "<br>");
// document.write("Last index of 'L': " + lastIndex);
// Question 5
// var word = "Pakistani";
// var charAtIndex3 = word.charAt(3);
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + charAtIndex3);
// Question 6
// var firstname = prompt("Enter your first name:");
// var lastname = prompt("Enter your last name:");
// var fullname = firstname.concat(" ", lastname);
// alert("Hello, " + fullname + "!");
// Question 7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);
// Question 8
// var message = "Ali and sami are best friends and they play crichet and football togather.";
// var newMessage = message.replace(/and/g, "&");
// document.write("Original message:" + message + "<br>");
// document.write("After replacement: " + newMessage);
// Question 9
// var str = "472";
// var num = Number(str);
// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br>");
// document.write("value: " + num + "<br>");
// document.write("Type: " + typeof num + "<br>");
// Question 10
// var userInput = prompt("Enter a string:");
// var upperCaseInput = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + upperCaseInput);
// Question 11
// var userinput = prompt("Enter a string:");
// var titleCaseInput = userinput.charAt(0).toUpperCase() + userinput.slice(1).tolowerCase();
// document.write("User input: " + userinput + "<br>");
// document.write("Title case: " + titleCaseInput);
// Question 12
// var num = 35.36;
// var str = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + str);
// Question 13
// var username = prompt("Enter a username:");
// var invalidChars = ["@", ".", ",", "!"];
// for (var i = 0; i < invalidChars.length; i++) {
// if (username.indexOf(invalidChars[i]) !== -1) {
// alert("Please enter a valid username without " + invalidChars[i]);
// break;
// }
// }
// Question 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").tolowerCase();
// var itemFound = false;
// for (var i = 0; i < A.Length; i+=) {
// if (A[i].toLowerCase() === userINput) {
// itemFound = true;
// alert(userInput + " is available at index " + i + " in our bakery.");
// break;
// }
// }
// if (!itemFound) {
// alert("We are sorry. " + userInput + " is not available in our bakery.");
// }
// }
// Question 15
// var password = prompt("Enter a password:");
// var isValid = true;
// if (password.Length < 6) {
// alert("Password must be at least 6 charcters long.");
// isValid = false;
// }
// if (!isValid) {
// alert("Please enter a valid password.");
// }
// Question 16
// var university = "University of Karachi";
// var chars  = university.split(" ");
// for (var i = 0 ; i < chars.length; i++) {
// document.write(chars[i] + "<br>");
// }
// Question 17
// var userInput = prompt("Enter a string:");
// var LastChar = userInput.charAt(userInput.Length - 1);
// document.write("User input: " + userInput + "<br>");
// document.write("Last character of input: " + LastChar);
// Question 18
// var str = "The quick brown fox jumps over the lazy dog";
// var count = (str.toLowerCase().match(/the/g) || []).length;
// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrence(s) of the world 'the'");
// })
// The End