// Chapter 35-38
// // Question 1
// function currentDateTime(){
//     const now = new Date();
//     return now.toString();
// }
// console.log(currentDateTime());

// Question 2
// function greetUser(firstName, LastName){
//     var firstName = prompt("Enter your first name");
//     var LastName = prompt("Enter your Last name");
//   alert("Hello" + " " + firstName + " " + LastName);
// }
// console.log(greetUser());

// Question 3
// function addNumbers(num1, num2){
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var sum = num1 + num2;
// return sum;
// }
// console.log(addNumbers());

// Question 4
// function calculator(num1, num2, operator){
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operator = prompt("Enter operator (+, -, *, /, %)");
// if(operator === "+"){
// return num1 + num2;
// }
// else if(operator === "-"){
// return num1 - num2;
// }
// else if(operator === "*"){
// return num1 * num2;
// }
// else if(operator === "/"){
// return num1 / num2;
// }
// else if(operator === "%"){
// return num1 % num2;
// }
// }
// console.log(calculator());

// Question 5
// function squareNumber(num){
// var num = +prompt("Enter a number to find its square");
// return num * num;
// }
// console.log(squareNumber());

// Question 6
// function factorial(num){
// var num = +prompt("Enter a number to find its factorial");
// if(num < 0 ){
// return "Factorial is not defined for negative numbers";
// }
// else if(num === 0 || num === 1){
// return 1;
// }
// else{
//     var fact = 1;
//     for(var i = 2; i <= num; i++){
//     fact *= i;
//     }
//     return fact;
//    }
// }
// console.log(factorial());

// Question 7
// function countNumbers(start, end){
// var start = +prompt("Enter starting number");
// var end = +prompt("Enter ending number");
// for(var i = start; i <= end; i++){
// console.log(i);
// }
// }
// console.log(countNumbers());

// Question 8
// function calculatorHypotenuse(base, perpendicular){
// var base = +prompt("Enter base of the triangles");
// var perpendicular = +prompt("Enter perpendiculur of the triangles");
// function square(num){
// return num * num ;
// }
// var hypotenuse = Math.sqrt(square(base) + square(perpendicular));
// return hypotenuse;
// }
// console.log(calculatorHypotenuse());

// Question 9
// function areaOfRectangle(width,height){
// var width = +prompt("Enter width of the rectangle");
// var height = +prompt("Enter height of the rectangle");
// return width * height;
// }
// console.log(areaOfRectangle());
// console.log(areaOfRectangle(5, 10));

// Question 10
// function palindromeCheck(str){
// var str = prompt("Enter a string to check if it is palindrome or not");
// var reversedStr = str.split(" ").reverse().join(" ");
// if(str === reversedStr){
// return true;
// }
// else{
//     return false;
//     }
//     }
//     console.log(palindromeCheck());

//     QUestion 11
// function titleCaseConversion(str){
// var str = prompt("Enter a string to convert it to title case");
// var words = str.tolowerCase().split(" ");
// for(var i = 0; i < words.Length; i++){
// words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
// }
// return words.join(" ");
// }
// console.log(titleCaseConversion());

// Question 12
// function LongestWord(str){
// var str = prompt("Enter a string to find its Longest word");
// var words = str.split(" ");
// var Longest = "";
// for(var i = 0; i < words.Length; i++){
// if(words[i].Length > Longest.Length){
// Longest = words[i];
// }
// }
// return Longest;
// }
// console.log(LongestWord());

// Question 13
// function charCount(str, char){
// var str = prompt("Etnter a string");
// var char = prompt("Enter a character to find its accurance");
// var count = 0;
// for(var i = 0; i < str.Length; i++){
// if(str.charAt(i) === char){
// count++;
// }
// }
// return count;
// }
// console.log(charCount());

// Question 14
// function calcCircumference(radius){
// var radius = +prompt("Enter radius of the circle");
// var circumference = 2 * Math.PI * radius;
// return circumference;
// }
// console.log(calcCircumference());
// function calcArea(radius){
// var radius = +prompt("Enter radius of the circles");
// var area = Math.PI * radius * radius;
// return area;
// }
// console.log(calcArea());
// End of chapter 35-38

// Chapter 38-46
// Question 1
// function showalert(){
// alert("Hello! I am an alert box!");
// }
// Question 2
// function showalert(){
// alert("Hello! I am an alert box!");
// }
// Question 3
// function sumValues(){
// var num = 0;
// for(var i = 1; i <= 10; i++){
// num += i;
// }
// alert("The sum of numbers from 1 to 10 is: " + num);
// }
// Question 4
// function showTable(){
// var num = +prompt("Enter a number to show its multiplication table");
// var Length = +prompt("Enter Length of the multiplication table");
// var table = "";
// for(var i = 1; i <= Length; i++){
// table += num + " x " + i + " = " + (num * i) + "\n";
// }
// alert(table);
// }
// Quetion 5
// function showFruits(){
// var fruits = ["apple", "banana", "mango", "arange", "strawberry"];
// var List = "";
// for(var i = 0; i < fruits.length; i++){
// list += fruits[i] + "\n";
// }
// alert(list);
// }
// Question 7
// function showCount(){
// var start = +prompt("Enter starting number");
// var end = +prompt("Enter ending number");
// var count = "";
// for(var i = start; i <= end; i++){
// count += i + "\n";
// }
// alert(count);
// }
// The End