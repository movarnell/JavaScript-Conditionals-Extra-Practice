// Below are the solutions to the problems. You can compare your answers to these solutions to see how you did. If you got any wrong, try to figure out why and ask for help if you need it. If you did them a different way, that's fine too. There are many ways to solve these problems. These are simply one way to do it.


// Solution 1
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Solution 2
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Solution 3
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Solution 4
if (username === "admin") {
  console.log("Admin access");
} else {
  console.log("User access");
}

// Solution 5
if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 20 && temperature <= 30) {
  console.log("Warm");
} else {
  console.log("Cold");
}

// Solution 6
if (trafficLight === "green") {
  console.log("Go");
} else if (trafficLight === "yellow") {
  console.log("Caution");
} else if (trafficLight === "red") {
  console.log("Stop");
}

// Solution 7
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

// Solution 8
if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend");
} else {
  console.log("Weekday");
}

// Solution 9
if (height >= 150) {
  console.log("Tall enough");
} else {
  console.log("Too short");
}

// Solution 10
if (password.length >= 8) {
  console.log("Password valid");
} else {
  console.log("Password too short");
}

// Solution 11
if (points >= 100) {
  console.log("Winner");
} else {
  console.log("Try again");
}

// Solution 12
if (time < 12) {
  console.log("Good morning");
} else if (time >= 12 && time < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

// Solution 13
if (isRainy) {
  console.log("Take an umbrella");
} else {
  console.log("No umbrella needed");
}

// Solution 14
if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 19) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// Solution 15
if (grade === "A") {
  console.log("Excellent");
} else if (grade === "B") {
  console.log("Good");
} else if (grade === "C") {
  console.log("Average");
} else if (grade === "D") {
  console.log("Below Average");
} else {
  console.log("Fail");
}

// Solution 16
if (isMember && purchaseAmount > 500) {
  console.log("Discount Applied");
} else {
  console.log("No Discount");
}

// Solution 17
if (speed > 60) {
  console.log("Speeding");
} else if (speed === 60) {
  console.log("Limit");
} else {
  console.log("Safe");
}

// Solution 18
if (year % 4 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

// Solution 19
if (num < 0) {
  console.log("Negative");
} else if (num > 0) {
  console.log("Positive");
} else {
  console.log("Zero");
}

// Solution 20
if (isOnline) {
  console.log("User is online");
} else {
  console.log("User is offline");
}

// Solution 21
if (batteryLevel < 20) {
  console.log("Low battery");
} else {
  console.log("Battery OK");
}

// Solution 22
if (distance < 5) {
  console.log("Close");
} else if (distance >= 5 && distance <= 15) {
  console.log("Moderate");
} else {
  console.log("Far");
}

// Solution 23
if (language === "English") {
  console.log("Hello");
} else if (language === "Spanish") {
  console.log("Hola");
} else if (language === "French") {
  console.log("Bonjour");
} else {
  console.log("Unknown language");
}

// Solution 24
if (quantity > 1) {
  console.log("plural");
} else {
  console.log("singular");
}

// Solution 25
if (!isVerified && hasLoginAttempts > 3) {
  console.log("Account locked");
} else {
  console.log("Access granted");
}
