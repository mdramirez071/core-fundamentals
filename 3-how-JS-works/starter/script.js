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



///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


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









