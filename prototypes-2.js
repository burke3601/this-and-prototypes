/*
the keyword `this` refers to the instance of the type.

In a constructor function, the `this` keyword allows you to customize the instance being created. you can attach properties and methods to the instance.

In a prototype method, you can refer to the specific instnce using keyword `this`.

`this` is also known as the owner (or caller) of the method

What makes a function a constructor? Nothing in particular!
It's in the way you use it:
-you do stuff with `this` inside of the function
- you call it with `new`, which tells JS to auto-magically return the `this` object

What is `this` outside of a constructor or a prototype method?
- it refers tot he `global` object. In node, that's a special object that has all the "built-in" function and properties

What is the global `this` in a browser?
- it's the `window` object. 

this global object is an instance of new Object. It has some custom properties and methods specific to "running" your JS (ex. it has console, setTimeout, setInterval, etc.). These are not Object.prototype.

*/


function Cat(name) {    //Cat is a "constructor" function. 
    //What is this?!
    this.name = name;
    this.hasClaws = true;
    this.toys = [];
    //why is there no return?
    // it is auto-magic if you use `new`
    //Do not do this: return this
}

//adding a .meow method to Cat
Cat.prototype.meow = function () {
    console.log('inside meow ++++++++++++++++++')
    console.log(this)
    console.log(`Hi my name is ${this.name}`)
    console.log('end of meow +++++++++++++++++')
};

const oakley = new Cat('oakley');
oakley.meow(); //Hi my name is oakley
console.log(`oakley name is ${oakley.name}`)

const milla = new Cat('milla');
milla.meow(); //"hi my name is milla"
console.log(`milla name is ${milla.name}`)



//not using `new` keyword
// const chris = Cat('chris');
// console.log(chris)
// chris.meow();
// console.log(`chris name is ${chris.name}`)

//prototypes are how JS does object oriented programming (OOP)