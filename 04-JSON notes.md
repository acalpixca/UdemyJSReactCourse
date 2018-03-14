# JavaScript and React for Devs - Udemy - Cassidy Williams

## JSON:
Set of text-based rules to store and transmit information. It is not part of JavaScript but it is essential for modern JavaScript development. One of its virtues is that it's both machine and human readable. It stands for JavaScript Object Notation.

A collection of pairs "key" "value".
The key is a string in quotes "soy un string" (Quotes are not compulsory, but good practice.)
The value can be a string, array, number, object, boolean expression.
```json
{
   "name": "Eva",
   "age": 16,
   "been to Antarctica": false,
   "address": {"line 1": "C Emigdio Marmolejo 72",
               "town": "Ayala",
               "state": "Morelos",
               "country": "Mexico"
            }
}
```
### Converting JSON:
* JSON.stringify() --> converts JSON into a string.
* JSON.parse() --> converts a string into a JSON object.

### Mixing AXAX / fetch() with JSON
``` javaScript
function getUser(name) {
  fetch('https://api.github.com/users/' + name) // haces la llamada
    .then(function(r) { // empaquetas el resultado una vez está hecho y lo devuelves convertido a JSON
      return r.json();
    })
    .then(function(j) { // j contiene el objeto con la respuesta del api
      response = j;
      console.log (j.name); // de este modo podemos acceder a los datos contenidos en el objeto
      // aunque normalmente lo que haremos es manipular objetos DOM (p's li's etc) y meterles el contenido como innerHTML
    })
}
```
