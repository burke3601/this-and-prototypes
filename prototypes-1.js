/*
Functions declare types in JavaScript. 
Examples of types: array, string, number
Every type has its own set of abilities, known as methods.
Examples of methods: .map() or .toFixed

To give a type a method, you assign a function to a property on the function's prototype object.

Any instance of the type has access to methods or attributes in the prototype.

When you try to access a method or property of an instance, Javascript first looks at the instance to fund it. If not found, JavaScript looks at the prototype.
    
You can think of this as JS searching the prototype chain (i.e., going from specific instance up to the general type). Other languages (like Python) refer to this as method resolution.

Why prototypes? It's a resource optimization technique. Instead of creating a copy of a function for every instance, all instances share the single copy of the function.

JavaScript was originally named LiveScript and had wildly different syntax. And then, for marketing pruposes, it was renmaed JS to piggyback on the huge marketing effors around the Java language.

JavaScript's `class` keyword is really just prototypes under the hood. It is condisdered "syntactic sugar" (nicer syntax) for something standard in the language.


*/


// A Cat type
function Cat() {

}
//adding a .meow method to Cat
Cat.prototype.meow = function () {
    console.log('mew mew');
}
Cat.prototype.hasClaws = true

const oakley = new Cat(); // created an Object og type "Cat"
console.log(oakley.prototype); //instances do not have a prototype
console.log(Cat.prototype) //the type has a prototype

oakley.meow(); //instances access methods on the prototype
console.log(`oakley has claws? ${oakley.hasClaws}`)


oakley.isNapping = true;
console.log(`oakley is napping? ${oakley.isNapping}`);
const milla = new Cat()
console.log(`milla is napping? ${milla.isNapping}`);
console.log(`milla has claws? ${milla.hasClaws}`);

Cat.prototype.kungFuFight = function () {
    console.log("hi YA!")
}
 milla.kungFuFight();
 oakley.kungFuFight();


 Cat.prototype.kungFuFight = () => {
     console.log('chop sockeeeee')
    
 }

 milla.kungFuFight();
 oakley.kungFuFight();

/*
function FormField() {
    //"boot up" the form field
}

FormField.prototype.validate =  () => {
    //check if this particular form field is filled out
}



// class TodoList extends React.Component {

// }
// function TodoList() {

// }
// TodoList.prototype = new React.Component();
// const tl = new TodoList();
// tl.render();
// tl.componentDidMount()
*/