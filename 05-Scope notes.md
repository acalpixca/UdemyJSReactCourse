# JavaScript and React for Devs - Udemy - Cassidy Williams

## Scope:
Variable visibility.

2 types of scope:
* Global: Everything declared in a javascript file which is not inside a function, is in the global scope.
* Local: Everything declared inside a function, is in the local scope of the function.

### this
this is the reason why scope in JavaScript is different to other languages.
this refers to the context of the object, function or variable that uses it.

### Call method:
When you call a function, what you're actually doing is calling the call function of the function :-)

Imagine this function:
``` javaScript
function greet(thing){
   console.log(this + " sends greetings to " + thing);
}
```
When you invoke it like this:
``` javaScript
greet("eva","neighbours");
```
What you're actually doing is:
``` javaScript
greet.call("eva","neighbours");
```
Getting from the 1st to the 2nd is called "desugaring". Why? I think it's because the first one is "sugar syntax", i.e. a way of writing the sentence allowed to the developer so that things look / taste better, without any nutrients :-)
``` javaScript
var onePerson= {
   name: "Eva",
   greet: function(thing) {
      console.log(this.name + " sends greetings to " + thing);
   }
}
```
So when you do
``` JavaScript
onePerson.greet("neighbours");
```
What is happening is, in fact, this:
``` JavaScript
onePerson.greet.call(person,"neighbours");
```
### Apply method:
Same as call, but the parameters (beyond this) are passed in an array
The difference is that (this is a mnemonic):
 * for Apply you pass an array.
 * for Call you need to Count your parameters.
Example:
``` javaScript
function greet(thing1,thing2){
   console.log(this + " sends greetings to " + thing1 + ".");
   console.log(this + " sends greetings to " + thing2 + ", too.");
}
```
To invoke it, first with call, then with apply:
``` javaScript
greet.call("eva","lucy","bom");
greet.apply("eva",["lucy","bom"]);
```
### Bind method:
*Bind* sets the context of something to the provided value. i.e. Bind sets "this" to "somehting".
Example:
``` javaScript
var boundGreeting = greet.bound("Blanca"); // this toma por valor "Blanca" si ejecutamos boundGreeting (que es una variable que contiene una función para la cual hemos fijado el binding)
```
Usaríamos así la función:
``` javaScript
boundGreeting("lucy","bom");
// devuelve: "Blanca sends greetings to lucy. Blanca sends greetings to bom, too."
```
### Extra reading:
* https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
* https://codeplanet.io/javascript-apply-vs-call-vs-bind/
