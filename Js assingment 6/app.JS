// chapter 31-35
//   question 1
//  var Date = new Date();
//  document.write(Date);

// Question 2
//  var Month = ["January", "February", "March", "April",
//  "May", "June", "July", "August", "September", "October", "November", "December"];
// var d = new Date();
// var n = Month[d.getMonth()];
// alert("Current Month: " + n);

// Question 3
//  var Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var d = new Date();
//  var n = Day[d.getDay()];
//  alert("Today is " + n);

// Question 4
// var Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// var n = Day[d.getDay()];
// if (n === "Sun" || n === "Sat") {
    // alert("It's Fun day");
// } else {
    // alert("It's a working day");
// }
// Question 5
// var d = new Date();
// var n = d.getDate();
// if (n < 16) {
    // alert("First fifteen days of the month");
// } else {
    // alert("Last days of the Month");
// }
// Question 6
// var d = new Date();
// var n = d.getTime();
// var min = n / (1000 * 60);
// document.write("Current Date: " + d + "<br>");
// document.write("Elipsed miliseconds since January 1 1970: " + n + "<br>");
// document.write("Elipsed minutes since Januarry 1 1970: " + min + "<br>");

// Question 7
//  var d = new Date();
//  var n = d.getHours();
//  if (n < 12) {
    //  alert("It's AM");
//  } else {
    //  alert("It's PM");
//  }

//  Question 8
//  var LastDate = new Date("Dec 31, 2020");
//  document.write("Later Date: " + LastDate);

//  Question 9
//  var RamadanDate = new Date("June 18, 2015");
//  var CurrentDate = new Date();
//  var diff = CurrentDate - RamadanDate;
//  var days = Math.floor (diff / (1000 * 60 * 60 * 24));
//  document.write(days + " days have been passed since 1st Ramadan, 2015");

//   Question 10 
//  var refereceDate = new Date("Dec 5, 2015");
// var begDate = new Date("Jan 1, 2015");
// var diff = refereceDate - begDate;
// var seconds = Math.floor (diff / (1000));
// document.write("On reference date " + referenceDate + "<br>");
// document.write(seconds + " seconds had passed since beginning of 2015");

// Question 11
// var d = new Date();
// var n = d.getHours();
// d.setHours(n-1);
// document.write("Current date: " + d + "<br>");
// document.write("1 hour ago, it was " + d);
// 
// Question 12
// var d = new Date();
// var n = d.getFullYear();
// d.setFullYear(n-100);
// document.write("Current date: " + d + "<br>");
// document.write("100 years back, it was " + d);

// Question 13
//  var age = prompt("Enter your age");
// var d = new Date();
//  var n = d.getFullYear();
// var bitYear = n - age;
// document.write("Your age is: " + age + "<br>");
// document.write("Your birth year is: " + bitYear);

// Question 14
// var customerName = "ABC Customer";
// var currentMonth = "February";
// var numberOfUnits = 410;
// var chargesPersuit = 16;
// var netAmount = numberOfUnits * chargesPresuit;
// var LatePayment = 350;
// var grossAmount = netAmount + LatePayment;
// document.write("<h1>K-Electric Bill<h1>");
// document.write("Customer Name: <b>" + customerName  + "<br>");
// document.write("Month: <br>" + currentMonth + "<br>");
// document.write("Number of units: <b>" + numberOfUnits + "<br>");
// document.write("Charges per unit: <b>" + chargesPersuit + "<br><br>");
// document.write("Net Amount payable (within Due Date): <b>" + netAmount + "<br>");
// document.write("Late Payment Surcharge: <b>" + LatePayment + "<br>");
// document.write("Gross Amount payable (after Due Date): <br>" + grossAmount);

// The End