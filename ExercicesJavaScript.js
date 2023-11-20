// Exercise 1: Rectangle Area Calculation
// 1. Create a function called 'calculateRectangleArea' that takes two parameters: length and width of a rectangle.
function calculateRectangleArea(length, width) {
    // 2. The function should return the area of the rectangle.
    return length * width;
}
// 3. Call the function with different values of length and width.
var result = calculateRectangleArea(4, 5);
console.log(result);

// Exercise 2: Celsius to Fahrenheit Conversion
// 1. Create a function called 'celsiusToFahrenheit' that takes a parameter representing a temperature in Celsius.
function celsiusToFahrenheit(celsius) {
    // 2. The function should convert the temperature to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32.
    var cTemp = celsius;
    var fahr = cTemp * 9 / 5 + 32;
    return fahr;
}
// 3. Call the function with different values of temperature in Celsius.
var result = celsiusToFahrenheit(25);
console.log(result);

// Exercise 3: Variables
// 1. Create a variable 'name' and assign it your name.
var name = "Jessy";
// 2. Create a variable 'age' and assign it your age.
var age = 20;
// 3. Display these variables in the console.
console.log(name + " " + age);

// Exercise 4:
// 1. Create two variables 'number1' and 'number2', and assign numerical values to them.
var number1 = 20;
var number2 = 5;
// 2. Add them, subtract them, multiply them, and divide them.
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
// 3. Display the results in the console.

// Exercise 5: Loop
// Create a 'for' loop that counts from 1 to 10 and displays each number in the console.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercise 6: Conditions
// 1. Create a variable 'temperature' and assign it a numerical value.
var temperature = 7;
// 2. Write a condition that displays "It's hot!" if the temperature is above 30 degrees Celsius, "It's mild" if the temperature is between 20 and 30 degrees, "It's cold" otherwise.
if (temperature > 30) {
    console.log("It's hot! 🥵");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's mild 😏");
} else {
    console.log("It's cold 🥶");
}

// Exercise 7: Arrays
// 1. Create an array of fruit names.
let fruits = ["Apple", "Banana", "Pineapple", "Strawberry", "Cherry"];
// 2. Iterate through the array and display each fruit name in the console.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Exercise 8: Functions
// 1. Create a function called 'calculateSum' that takes two parameters, a and b, and returns the sum of these two numbers.
function calculateSum(a, b) {
    return a + b;
}
// 2. Call this function with different sets of numbers and display the results.
var result = calculateSum(10, 25);
console.log(result);

// Exercise 9: Objects
// 1. Create an object representing a user with properties such as name, age, and email.
const user = {
    name: "Pierre",
    age: 45,
    email: "pierredupont@yahoo.fr",
};
// 2. Display the properties of this object in the console.
console.log(`${user.name} is ${user.age} years old and their email address is ${user.email}`);
