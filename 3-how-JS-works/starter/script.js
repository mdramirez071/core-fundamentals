//LECTURE NOTES: 
//Javascript Engine is an engine that processes our Javascript Code
//It begins with a Parser which then produces a data structure called an Abstract Syntax Tree which
//Then gets converted to Machine Code, once the code is converted to Machine Code, our code will finally run

//Execution Context (a box, a container, or a  wrapper which stores variables and in which a piece of our code is evaluated and executed) - 
//The Default is always teh Global Execution Context - Code that is not inside any function, Associate with the global object, in the browser, tht's the window object, lastName === window.lastName // true
//Each time we call a function it opens up it's own Execution context!! **IMPORTANT**

//IF ANOTHER FUNCTION GETS CALLED THEN IT CREATES ANOTHER EXECUTION CONTEXT WHICH THEN GOES ONTO THE EXECUTION STACK (see video for more info..)

//REMEMBER TO SAY THE PROPER TERMINOLOGY WHICH TALKING ABOUT THE EXECUTION STACK. i.e. Functions GET PUSHED AND POPS OFF THE STACK
//There are 2 phases to execution context: 1) Creation Phase and 2) Execution Phase (see video more details...)

//Each Execution Context will have its own Variable Object which stores all the important data that the function will use while its running. //This happens before the code is even executed.

//SIDE NOTE for FrontEnd Masters: You can use .call() or .apply() to invoke/call a Function
//Watch debounce and bind exercise from FrontEnd Masters for interview practice to make sure you understand it.
///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1980);

function calculateAge(year) {
    console.log(2016 - year);
}

// You CANNOT invoke the retirement function because Hoisting ONLY works with 'function declarations' NOT 'functione expressions'
//retirement(1990);

var retirement = function(year){
    console.log(65 - (2016 - year));
}

retirement(1990);

//variables

console.log(age); //This will output 'undefined' to the console becasue Hoisting allows Javascript to detect that there is a variable called age within the Global Execution Context.
//However, it cannot detect the value of the variable until after it has been assigned.
var age = 23; 

function foo(){
    console.log(age); //here is another instance where it will print 'undefined' because the variable age is being outputted before it is assigned within the local execution context of the function 'foo'
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
//Hoisting is important because it allows Javascript developers to invoke function declarations that have been created beneath it.



///////////////////////////////////////
// Lecture: Scoping

//Remember that each Execution Context Object is made up of 3 components - Variable Object (VO), Scope chain, and "This" variable
//Lexical Scoping: a function that is lexically within another function, has access to the variables for that outer function.
//See example below for clarification of scope: Remember that the Parent Scopes do not have accesso to their child scopes. The scope chain works from the INSIDE PUSHING OUTWARDS!

var a = 'Hello';
first();

function first(){
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
//Scope Chain: functin second() -> function first() -> Global Scope

// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first(){
    var b = 'Hi';
    second();

    function second(){
        var c = 'Hey!';
        third()
    }
}

function third(){
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
//REMEMBER that function third() cannot output variable C because variable 'c' resides in a different scope than function third()


///////////////////////////////////////
// Lecture: The this keyword

//Remember that the 'this' keyword gets created/set during the last stage of the Creation Phase in a 'Execution Context Object':
//the 'this' below will point to the global 'window object' as the default.
//console.log(this);

// calculateAge(1985);

// function calculateAge(year){
//     console.log(2016 - year);
//     console.log(this); //'this' will still point the global window object because this is a regular function call! Not a Object method!
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this); //this is part of the object method and will print out the john object accordingly.
        console.log(2016 - this.yearOfBirth);

        // function innerFunction(){
        //     console.log(this); //this also points to the window global object because its inside of a function call EVEN though its stored inside of a object method.
        // }
        // innerFunction();
    }
}
john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

//we're going TO BORROW JOHN's method to use in Mike's object. This is called 'METHOD BORROWING' this is a best practice!!
mike.calculateAge = john.calculateAge;
mike.calculateAge();

//remember that 'this' only becomes something when it is assigned a value during a method call!







// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









