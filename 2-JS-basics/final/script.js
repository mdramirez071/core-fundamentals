console.log("Hello World!!!");
/* Variables and data types */
var firstName = "Michael";
console.log(firstName);

var lastName = "Ramirez";
console.log(lastName);
var age = 31;
var verifyAge = true;
console.log(verifyAge);

var job;
console.log(job);

job = "Technical Support Analyst";
console.log(job);

var _3years = 3;
var michaelDavid = "Michael and David";
var _delete = 23;

/* Variable mutation and type coercion */
var firstName = "Michael";
var age = 31;

// Type coercion

console.log(firstName + " " + age);

var job, isMarried;
job = "Technical Support Analyst";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old" +
    job +
    ". Is he married? " +
    isMarried
);

//Variable mutation
age = "twenty eight";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName);
//Remember you can use either '$' or '_' in front of variable names but
//not keywords such as function, delete, or if

/*****************************
 * Basic operators
 */
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators (include +, -, /, *)
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
//the below expression evaluates to true since John is in fact younger
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);

/*****************************
 * Operator precedence
 */
// REMEMBER TO REFERENCE OPERATOR PRECENDENCE TABLE ON MDN TO SEE WHICH OPERATORS WILL EXECUTE FIRST
// FOR QUICK REFERENCE: REMEMBER PEMDAS!
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 //26
//Logically you would think that y would have a value of undefined because x is undefined initially
//However, this is not the case due to the Operator Precendence Table! **IMPORTANT**
console.log(x, y);

//More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

/*
CODE CHALLENGE #1
*/

//Calculate Mark and John's BMI using the following formula: BMI = mass / height^2 (mass is in kg and height is in meters)
var markHeight = 6; //in meters
var markMass = 100; //in kg
//Mark's BMI
var markBMI = 100 / (6 * 6);

var johnHeight = 5; //in meters
var johnMass = 90; //in kg
//John's BMI
var johnBMI = 90 / (5 * 5);

//Boolean variable that checks whether Mark has a higher BMI than John
var markHigherBMI = markBMI > johnBMI;

//Log the output to the console that checks whether Mark has a higher BMI than John
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);

/*****************************
 * If / else statements
 */
var firstName = "Michael";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = false;
//remember that the 'default' condition is true. Therefore, if 'isMarried' is given a boolean value of false, it is saying the same thing as if 'false' is true then proceed otherwise do this.
if (isMarried) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var markHeight = 6; //in meters
var markMass = 100; //in kg
//Mark's BMI
var markBMI = 100 / (6 * 6);

var johnHeight = 5; //in meters
var johnMass = 90; //in kg
//John's BMI
var johnBMI = 90 / (5 * 5);
console.log(markBMI);
console.log(johnBMI);
if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}

/*****************************
 * Boolean logic
 */

var age = 16;
//write a function that checks the age of a person
function checkAge(age) {
  if (age < 13) {
    console.log("Jack is a boy");
  } else if (age >= 13 && age < 20) {
    console.log("Jack is a teenager");
  } else {
    console.log("Jack is a man yo");
  }
}
checkAge(age);

/*****************************
 * The Ternary Operator and Switch Statements
 */

var firstName = "John";
var age = 14;

// Ternary Operator
age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

/* if(age >=18) {
    var drink = 'beer';
    else {
        var drink = 'juice';
    }
}
*/

//Switch statement
var job = "teacher";

//Remember we want to insert the expression that we want to evaluate inside of switch(), in this case we want to evaluate the string value that is stored inside of the variable job.
switch (job) {
  case "teacher":
  case "instruction":
    console.log(firstName + " teaches kids how to code");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Fontucky");
    break;
  case "designer":
    console.log(firstName + " designs houses for a living");
    break;
  default:
    console.log(firstName + " does something else.");
}

//Below is an example of how we can convert our if else statement to a set of switch case statements. Here's a little trick :).
//We can use true as a default expression in order to enter inside of the switch case statements.
age = 21;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager");
    break;
  default:
    console.log(firstName + " is a man yo");
}

/*****************************
 * Truthy and Falsy values and equality operators
 */

//falsy values: undefined, null (intentionally not given a value), 0, '', NaN
//truthy values: NOT falsy values
//The following is an if-else statement that verifies whether a variable has been defined or NOT.

var height;

height = 23;
//Because '0' is a falsy value we must specify height === 0 as a condition in order to print out that the Variable is defined.
if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable is NOT defined.");
}

// Equality operators
if (height === "23") {
  console.log("The == operator does type coercion"); //meaning the number 23 will be coerced into a string value before making a comparison
}

//PRO TRIP:

//=== (strictly equals) is used in best practice in order to avoid unexpected situations as well as bugs.

/*****************************
 * CODING CHALLENGE 2
 */
//Scores for last 3 games for both John and Mike
//John's last 3 games (89, 120, 103 points)
//Mike's last 3 games (116, 94, 123 points)

//Step 1 Calculate the average score for each team
var johnAvgScore = (89 + 120 + 103) / 3;
var mikeAvgScore = (116 + 94 + 123) / 3;
//EXTRA CREDIT: Step 4
var maryAvgScore = (97 + 134 + 105) / 3;

console.log(johnAvgScore, mikeAvgScore, maryAvgScore);

//Step 2 Decide who wins based on whoever has the highest average score
if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
  console.log("John has the highest average score, John's the WINNER!");
} else if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore) {
  console.log("Mary has the highest average score, Mary's the WINNER!");
} else if (mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore) {
  console.log("Mike has the highest average score, Mike's the WINNER!");
}
//Step 3 this condition was added as part of step 3 in addition to changing the scores of john and mike's last 3 games.
else {
  console.log("John, Mike, and Mary have the same score! The match is a DRAW!");
}

/*****************************
 * Functions
 */
function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageJohn = calculateAge(1950);
var ageMike = calculateAge(1988);
var ageJane = calculateAge(1993);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1958, "Mike");
yearsUntilRetirement(1948, "Jane");

/*****************************
 * Function Statements and Expressions
 */
//Expressions are code that produces a result/value
//Whenever Javascript expects a value it means you should write an Expression
//Anything that does not produce any immediate result/value are called "Statements". These can also be called Function Declaration if you have a function that does not produce any immediate value/result.
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives a cab in Lisbon.";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));

/*****************************
 * Arrays
 */
// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

// Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.shift();
console.log(john);
//Because the element 23 does not exist in the array it will return an index of -1
console.log(john.indexOf(23));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John IS a designer";
console.log(isDesigner);

/*****************************
 * CODING CHALLENGE 3
 */
//Write a function that calculates the tip based on the amount of the bill
//Write conditional statements that multiplies the bill by the appropriate tip amount
var billAmount1 = 124;
var billAmount2 = 48;
var billAmount3 = 268;

function calculateTip(billAmount) {
  //Variables that will hold the tip amount and the final total amount (bill + tip)
  var tip;
  var total;
  if (billAmount < 50) {
    tip = billAmount * 0.2;
    tips.push(tip);
    total = tip + billAmount;
    totals.push(total);
  } else if (billAmount >= 50 && billAmount < 200) {
    tip = billAmount * 0.15;
    tips.push(tip);
    total = tip + billAmount;
    totals.push(total);
  } else {
    tip = billAmount * 0.1;
    tips.push(tip);
    total = tip + billAmount;
    totals.push(total);
  }
  return [tip, total];
}
//The tips array will hold the calculated tips for each bill
const tips = [];

//The totals array will hold the calculate totals for each bill plus their tips
const totals = [];

console.log(calculateTip(billAmount1));
console.log(calculateTip(billAmount2));
console.log(calculateTip(billAmount3));

//Prints out tips and totals for each bill in sequential order
console.log(tips, totals);

/* SEE ALTERNATIVE SOLUTION BELOW FROM INSTRUCTOR (slightly cleaner version)*/ 

/*****************************
 * Objects and properties
 */
//Object literal is way of defining object using the format below
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: '1990',
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
};
//dot notation
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//Creates an empty object called jane
var jane = new Object();
//We are now going to fill up our object
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

/*****************************
 * Objects and methods
 */
 var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: '1990',
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(birthYear){ //this is a function expression assigned as a method to the Object 'john'
  //'this' means the current object itself 'this is a special keyword'
    this.age = 2018 - this.birthYear;
  }
};
//KEEP IN MIND THAT ONLY OBJECTS HAVE METHODS.
john.age = john.calcAge();
console.log(john);

/*****************************
 * CODING CHALLENGE 4
 */
 //Calculate Mark and John's BMI using the following formula: BMI = mass / height^2 (mass is in kg and height is in meters)
//Step 1 Create an object with properties for John and Mark's full name, mass, and height.
var mark = {
  name: 'Mark Johnson',
  height: 6, //in meters
  mass: 100, //in kg
  //Step 2 - first half
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

var jack = {
  name: 'Jack Smith',
  height: 5, //in meters
  mass: 90, //in kg
  //Step 2 - 2nd half
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}
//Invoke the method called calcBMI in order to save/return the BMI in both Mark and John's objects - THIS PART IS NO LONGER NEEDED SEE LINE 514
// mark.calcBMI();
// jack.calcBMI();

//Instead of calculating the BMI and reading the value we can do it instantaneously in the conditional statements below
if(mark.calcBMI() > jack.calcBMI()){
  console.log(mark.name + ' has the highest BMI at ' + mark.bmi)
}
//since Mark's and Jack's BMI has already been calculated it doesn't need to be calculated again.
else if(mark.bmi < jack.bmi){
  console.log(jack.name + ' has the highest BMI at ' + jack.bmi)
}
else {
  console.log(jack.name + ' and ' + mark.name + ' has the same BMI!');
}

//REMEMBER IT IS IMPORTANT && BEST PRACTICE TO STORE METHODS INSIDE OF OBJECTS


/*****************************
 * Loops and iteration
 */
//continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i=0; i< john.length; i++){
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for(var i=0; i<john.length; i++){
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

//Looping backwards
for(var i=john.length -1; i >= 0; i--){

}


/*****************************
 * CODING CHALLENGE 5
 */
//Using information from the tip calculator challenge previously, create an advanced version
//using everything we learned so far!

//John and his family went to 5 different restaurants. The bills were
//$124, $48, $268, $180, and $42.

//John likes to tip 20% of the bill when the bill is less than $50, 15% when the
//bill is between $50 and $200, and 10% if the bill is more than $200.

//Implement a tip calculator using objects and loops:
//1. Create an object with an array for the bill values
//2. Add a method to calculate the tip
//3. This method should include a loop to iterate over all the paid bills and do the tip calculation
//4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts
//HINT: start with 2 empty arrays as properties then fill them up with the loop

//SEE EXTRA INFO FOR EXTRA CREDIT:


/*****************************
 * Variables and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/

/*****************************
 * Variable mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/*****************************
 * Basic operators
 */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);
*/

/*****************************
 * Operator precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/*****************************
 * If / else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}
*/

/*****************************
 * Boolean logic
 */
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*****************************
 * The Ternary Operator and Switch Statements
 */
/*
var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

(if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/*****************************
 * Truthy and Falsy values and equality operators
 */
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/

/*****************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*****************************
 * Function Statements and Expressions
 */
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*****************************
 * Arrays
 */
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/

/*****************************
 * Objects and properties
 */
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*****************************
 * Objects and methods
 */
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
*/

/*****************************
 * Loops and iteration
 */

/*
// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
*/
