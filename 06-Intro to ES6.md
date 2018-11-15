# JavaScript and React for Devs - Udemy - Cassidy Williams

## Intro to ES6:
This means the 6th version of ECMAScript, which is the official name for JavaScript.

## Transpiling y Polyfilling

* Polyfill - emulates APIs (AKA shimming)
* Transpiler - transforms your code (source to source compilers)

You would use polyfill if you're using a very modern feature of the browser that a browser may not have implemented yet.

Tips: keep a transpiler in your build process, and add polyfills (shims) as new features are created.

This example is a *fetch* polyfill. Fetch is not implemented in the Internet Explorer.
https://github.com/github/fetch
This example is a transpiler, or JavaScript compiler, that modifies modern JS into browser compatible JS.
https://babeljs.io
And a good text on why we need JS transpilers:
https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them

TypeScript -> Some kind of JS with strong typing and classic OOP.
CoffeeScript -> Some kind of JS that ressembles Python.
ClojureScript -> I guess functional programming

If you use any of these 3 variations, you'll need a transpiler to generate what the browser understands: JavaScript.

### Variable declarations: var, lets, const

var is the "old" one.

Hoisting: something that JavaScript does: move all function and variable declarations to the top of  the current scope. (in the old times you had to do this yourself to help 1 pass compilers work).

[Immediately invoked function -> you invoke it immediately, so you don't have to mention it
``` javascript
(function(){
   var a=2;
   console.log(a+ " " + b);
   var b=3;
})();
```
The code above is translated to the following by hoisting, and this is what is actually ran:
``` JavaScript
(function(){
   var a;
   var b;
   a=2;
   console.log(a+ " " + b);
   b=3;
})();
```
-> so running it, the result is "2 Undefined", but it runs.

The use of let is that hoisting does not afect declarations made with let or with const. I.e.

``` JavaScript
(function(){
   let a=2;
   console.log(a+ " " + b);
   let b=3;
})();
```
-> Running this, we would get an UncaughtReferenceError, because b is used before it's declared.

### Block Scoping
{ lo que va dentro de un bloque de código separado por llaves }
*let* y *const* lo puedes constreñir a un block scoping. Pero var se aplica a todo el local scope (ignora esas llaves que la contienen).

Let y const se comportan prácticamente igual. La gran diferencia es que const es para constantes, y por lo tanto no se pueden redefinir.

Var is the weakest form of declaration, it doesn't catch so many errors. Is var obsolete?
NO, because var is global by default, whereas lets and const are local by default.

More resources:
* http://wesbos.com/es6-block-scope-iife/
* https://www.sitepoint.com/joys-block-scoping-es6/

### Default values
Default values for parameters. I.e. if you receive no parameters, a default value must be declared.
Esto lo hacemos en el express de la app de acupuntura para inicializar el puerto en que se ejecuta el servidor.
``` JavaScript
function example(x, y){
   x = x || 20;
   y = y || 30;
   console.log(x+y);
}
```
Esto da problemas con valores que se evaluan a "falsy" como por ejemplo el 0.
En ES6 esto se hace así:
```JavaScript
function example(x=20, y=30){
   console.log(x+y);
}
```
Default values can be values, expressions or functions.
```JavaScript
function anotherExample(x=3, y=5*x, z=example(x)){
   /...
}
```
Default values are lazily evaluated and only apply when the parameter is Undefined or left out.

### Destructuring
Pull data from objects and arrays into their own variables. Extract properties from an object, etc.

``` JavaScript
let person = {
   first: 'eva',
   last: 'sanchez'
}
let {first, last} = person
// equivalente a let first = person.first; let last=person.last
```
You can assign default values while Destructuring.
``` JavaScript
let person = {
   first: 'eva',
   last: 'sanchez'
}
let {first, last, city:"CDMX"} = person
// equivalente a let first = person.first; let last=person.last; let city="CDMX"
```
You can also rename the properties
``` JavaScript
let person = {
   first: 'eva',
   last: 'sanchez'
}
let {first: firstName, last: lastName} = person
// equivalente a let firstName = person.first; let lastName=person.last
```
YOu can also repeat!
``` JavaScript
var {party: k, party: j} = {party=1}
// j vale 1, k vale 1
```
Swapping variables:
``` JavaScript
let x='hello';
let y='world';
let temp=x;
x=y;
y=temp;
// eso es swapping de toda la vida. Con esto se puede hacer en 1 sola línea:
[x,y]=[y,z];
```
### Literals
* Object Literals
* Template Literals

#### Object literals:
``` JavaScript
let x="hello";
let y="world";
// a la antigua:
let z = {
   x: x,
   y: y
}
// y ahora con literals de ES6
let zz = {
   x,
   y
}
```
Para funciones también queda todo más limpito:
``` JavaScript
// A la antigüita:
let z = {
   x(): function() {
      // código
   },
   y(): function(){
      // código
   }
}
// a la moderna con ES6:
let zz = {
   x: {
      // código
   },
   y: {
      // código
   }
}
```
Esto último se llama "concise methods" y se usa muchísimo en React.

#### Template Literals
Also known as string literals.
Example:
``` JavaScript
// old school
var name="Eva";
var greet="Hola, " + name + ", bienvenida";
console.log(greet);
```
Now you define template literals with back ticks \`\` and you can include variables with the $ sign and curly braces.
${variable-name} is called *interpolation*, and you can use expressions there, not only variable names.
``` JavaScript
var greet = `Hola, ${name}, bienvenida`;
var x=3;
var y=5;
function multiplica(a,b) {
   return(a*b);
}
console.log(`${x} multiplicado por ${y} vale ${multiplica(x,y)}`);
```
Template literals can be nested too!
And new lines are evaluated inside template literals.
``` javascript
function capitalize(s){
   return s.toUpperCase();
}
let you="ibis";
let t=`a very ${capitalize("big")} hello
to you, ${capitalize(`my ${you}`)}`;
/* Imprime esto:
a very BIG hello
to you, MY IBIS
*/
```
Line breaks are considered in template literals! so you don't have to use \\n to get one.

### Arrow functions
Declaration of functions, old style:
``` JavaScript
function add(x,y){
   return x+y;
}
```
The same, with arrow functions:
``` javascript
var add = (x,y) => x+y;
```
What we're doing there:
1. Define a variable and assign it an anonymous function identified by the parentheses which contain the parameters.
2. Declare the body portion of the function, which is what we find after the arrow.

If the body of the function is a bit more than one line, then it's clearer like this (a bit more verbose):
``` JavaScript
var add = (x,y) => {
   return(x+y);
};

```
Key aspects about Arrow functions:
* They are function expressions.
* They are anonymous.
* They redefine *this* --> Lex binding is lexical, or static. I.e. it doesn't have its own this, it uses the this of the scope where the function was called! So binding doesn't work here.
