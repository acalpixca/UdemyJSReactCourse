# JavaScript and React for Devs - Udemy - Cassidy Williams

## Events:

Events are associated to DOM objects. It is stuff that can happen, or things we do, to objects.

Note: what about timers?

### Common events:
* click (onclick)
* resize (change size of the document, i.e. resize the browser window)
* keydown, keypress, keyup
* mouseover
* load (the document has finished loading)

### Callbacks:
What you do when an event is triggered.
``` javascript
window.addEventListener('load', function(event){
   console.log('resource has finished loading');
});
```
### Custom events:
You can create your own:
``` javascript
document.body.addEventListener("timeEvent",aFunction); // timeEvent is my custom event

function aFunction(e){ // this is the callback function used above
   alert(e);
}

var myEvent=new CustomEvent('timeEvent',{ // this is the creation of the custom event added above
   detail: new Date()
});
```
for the event to get launched, and the callback function to be executed, you have to **dispatch** the event.
For instance, in the console:
(or when a button is clicked!)
document.body.dispatchEvent(myEvent);
