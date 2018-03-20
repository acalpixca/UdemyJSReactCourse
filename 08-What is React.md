# JavaScript and React for Devs - Udemy - Cassidy Williams

## What is React?
### Intro
Front end framework that is incredibly popular. The logic you learn when you learn React can be applied to other frameworks such as Angular and View.

Formal definition: JS library for building user interfaces.
It does everything that the V in the Model-View-Controller does, and throws out the useless parts.

3 reasons to use React:
* Reusable and stateful components: They are very similar to simple functions: you give them input and they give you output in return. The output is "user interfaces".
* Reactive updates: When a component changes, React automatically changes the user interface, you don't have to develop it. "It reacts to changes", hence its name.
* The Virtual DOM: It acts as an agent between the real DOM and you, the developer. It only refreshes the parts of the DOM that have changed. In execution it's always faster than working directly with "the real DOM", because the browser doesn't have to render a thousand changes. Users can't see the Virtual DOM.
   - So you write how you want your page to look like. The Virtual DOM compares that desired end state with the current situation in the browse, aka what the browser is showing now, and it works out the difference.

This is the official site of React: https://reactjs.org

Just pay attention to the license. React is owned by Facebook. Last year, WordPress decided to move away from it as to not have any license liabilities in the future.
https://ma.tt/2017/09/on-react-and-wordpress/
But then when folks were discussing this, and possible replacements for React...
https://github.com/wordpress/gutenberg/issues/2733
...Facebook changed the React license to a MIT license, so it's cool again ;-)
https://code.facebook.com/posts/300798627056246

### Where React lives
It lives within a single DIV in your web application's body. And this is amazing ;-) and super easy to incorporate it within existing applications.

So your html looks something like This
``` html
<!doctype html>
<html>
<head></head>
<body>
   <div id="root"></div>
</body>
</html>

```
and you have an index.js alongside like this one:
``` JavaScript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
   render() {
      return(
         <div className="App"> // not class, because class is a reserved JS word
         <h1>Hello, World!</h1>
         </div>
      );
   }
}

ReactDOM.render(<App />,document.getElementById('root'));
```
So that HTML gets injected in the element whose id is root!

But wait, what is that HTML in the middle of JavaScript, not as a string? That is JSX.

### JSX
JSX is a strictly typed OO programming language that compiles to JavaScript. It adds templating for components which is something very useful for React.

This means that when you're writing code in JSX you can use the HTML looking code that we can see in the code box above! It feels more natural than the DOM-manipulating-style equivalent.

It's also used in Webpack.
