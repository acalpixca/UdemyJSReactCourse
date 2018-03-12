# JavaScript and React for Devs - Udemy - Cassidy Williams

## DOM:
The link between HTML and JavaScript.
A glorified JavaScript object.

### Functions to get an element:
* getElementById()
* getElementsByClassName()
* getElementsByTagName()
* querySelector() + querySelectorAll()

querySelector works with CSS-like selectors, e.g.
* querySelector('#header');
* querySelector('.list');
--> Ojo, que no nos devuelve un array (como haría getElementsByClassName), sino el primer elemento solamente.
* querySelectorAll('.list');
--> Este sí nos devuelve toda la lista.
y se puede acceder a los hijos así:
querySelector('.list').children
--> you cannot apply children to somehting that is a list, not an object.
children returns a list. To pick one element: ...children[0];

### Attributes that you can alter:
.innerHTML
(ojo, que en jQuery esto sería una función: elemento.html("lo nuevo"), pero usando DOM es mediante una asignación)
.innerText

### Functions to create stuff
* document.createElement()
* document.createAttribute()

element.appendChild(subelemento) siendo subelemento uno creado con document.createElement.
Una vez creado un atributo, con document.createAttribute("nombre del atributo"), podemos darle valor con .value = "lo que sea"
Y podemos asignar el atributo a un elemento así:
element.setAttributeNode(atributo creado con createAttribute)
ejemplo...
```javascript
var enlace=document.createElement("a");
enlace.innerHTML="clica aquí";
var atri=document.createAttribute("href");
atri.value="http://breves.lavigilanta.info";
enlace.setAttributeNode(atri);

// y para añadirlo al documento:
document.body.appendChild(enlace);
```
