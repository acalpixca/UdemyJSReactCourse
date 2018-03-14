# JavaScript and React for Devs - Udemy - Cassidy Williams

## AJAX:
Synchronous vs Asynchronous - you can do both in AJAX
But it's with Asynchronous that you leverage the user experience benefits, i.e. you can render and modify your elements / dom objects/ whatever while data is being fetched (not after).

### HTTP Methods
GET - requests data from a resource (pulls)
POST - submits data to be processed (creates)
DELETE - requests deletion of a resource (removes)

### HTTP Status codes
100-level: Request received and understood. "Hold on".
200-level: as above plus processed successfully. "Here you go"
300-level: client must take additional action (e.g. redirection). "Go away".
400-level: the error seems to have been caused by the client. "You messed up".
500-level: the server failed to fulfill a valid request. "The server's messed up".

For Ajax and to simplify, we need a method to request a resource, and a handler to process what we receive, if we get a success status code, or handle the error otherwise.

### First example: the Callback method (the callback way :octocat: )
```javascript
var ajaxRequest = new XMLHttpRequest(); // creamos un objeto de tipo XMLHttpRequest
ajaxRequest.addEventListener('readystatechange', function(r) {
   // le añadimos un handler al evento readystatechange, o sea, cuando el estado de la request cambie.
  if(r.target.status === 200) { // si recibimos una respuesta con status 200 = "Here you go" :-)
    console.log(r.target.response);
  }
  // para que el handler esté completo, habría que poner funcionalidad para el caso de respuestas erróneas.
});
ajaxRequest.open("GET", "https://api.github.com/users/acalpixca", true); // creamos la request
ajaxRequest.send(); // enviamos la request.
```
### Second example: The Promises way
It's based on the Fetch API, so we won't be using XMLHttpRequest now. This is the most modern and preferred method. Note that it does NOT work with Internet Explorer (¡y lo he comprobado!)

**Promises**: JavaScript objects that can be returned synchronously from an asynchronous function.
They can have 3 status:
* Pending
* Fulfilled
* Rejected

In our case, this is how it's done.
``` javascript
fetch('https://api.github.com/users/acalpixca') // this creates the promise. fetch works with GET as default, it can be made to work with POST passing optional parameters.
.then(function(r) { // r is of type return. Amongst other things it has a status property
   console.log(r.status); // this will return a 200 status (if the fetch was successful, of course)
   return r.json(); // this is another promise, so we can daisychain with .then
})
.then(function(j){
   console.log(j); // this is another promise, we could continue with the daisychain!
})
```
#### More resources to fully understand promises:
* https://developers.google.com/web/fundamentals/primers/promises
* https://dev.to/damcosset/i-promise-i-wont-callback-anymore-cp3

#### An introduction to fetch:
* https://developers.google.com/web/updates/2015/03/introduction-to-fetch
