# JavaScript and React for Devs - Udemy - Cassidy Williams

## React State and Properties
### React State
Every component that you make in React has a state and properties.
State = condition of a specific program at a given moment.

React state is data that is specific to the current Component and it can change as the user interacts with it.
It's a plain JavaScript object that is initialized in the constructor and can be modified throughout the component's lifecycle.

A state can be anything: a number, a string, an object, even a promise...
In React, every time you modify the state, the functions of the Update phase are run, the app re-renders in the browser based on the changes.

More info: https://reactjs.org/docs/state-and-lifecycle.html

### React Props (properties)
Example. Imagine that in the App.js you have this component:
``` JavaScript
<Hello target="world" />
```
This makes *this.props.target* available, and you can use it like this in the render() function:
``` JavaScript
<div>Hello {this.props.target}</div>
```
It will render Hello World because the target prop has a value of "world".

Props are propagated from parents to children.

More info: https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm

### Adding states and props to the Konami app we created on 09
Watch video 12 :-)
