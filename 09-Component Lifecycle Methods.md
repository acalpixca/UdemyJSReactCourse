# JavaScript and React for Devs - Udemy - Cassidy Williams

## Component Lifecycle Methods
Each component has a set of lifecycle methods that you can use in your application.

### Initialization, Mounting, Updating and Unmounting
The first phase of the lifecycle is *Initialization*. It only has one method:
* constructor(): it constructs the component with its initial state.

The next phase is *Mounting*. It has 3 methods:
* componentWillMount(): it's executed right before the component is rendered. It's commonly used to configure your component.
* render(): it sticks the component into your user interface in your application.
* componentDidMount(): right after the component is loaded, and it's where you would launch an AJAX request to pull data for your component, or you would add event listeners.

The next phase is *Updating*. It has several methods:
* componentWillReceiveProps(): state of current component will change.
* componentShouldUpdate(): controls when the component gets updated. Similar to componentWillUpdate() but it returns a boolean tellling us whether the component will update or not.
* componentWillUpdate(): rarely used.
* render(): updates the component in the user interface.
* componentDidUpdate(): like componentDidMount()

The last phase is *Unmounting*: ok this component is not going to exist anymore, let's take it off the page. It only has one method:
* componentWillUnmount(): remove event listeners or network requests coming from the component.

This is the React Component Lifecycle, explained, and other interesting articles: https://developmentarc.gitbooks.io/react-indepth/life_cycle/introduction.html
https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c
https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm

### Example: Building a Konami Code React App
https://craig.is/killing/mice
https://github.com/facebook/create-react-app

Facebook created a tool to initialize a React project, called Create React App.

npm install -g create-react-app

This creates a command-line tool to initialize and create the app.

To invoke it: *create-react-app* on your terminal.
It creates a lot of structures.
Once it's done, the assistant suggests a few actions:
* yarn start: starts the development server.
* yarn build: bundles the app into static files for production.
* yarn test: starts the test runner.
* yarn eject: removes this tool and copies build dependencies and scripts into the app directory. If you do this, there is no way back.

And we start with:
cd konami
yarn start
This launches a server on port 3000, and opens the homepage of the project (a nice boilerplate one).

The project structure goes like this:
- node_modules
- public --> here you find the normal stuff: the index.html and the icon.
   - index.html has that <div id="root"> that will contain the application.
- src --> here you find the application code, amongst it...
   - index.js --> it's the JSX code that links the app with the html file by means of something like this:
      - ReactDOM.render(<App />, document.getElementById('root'));
   - App.js --> this is what gets embedded in the index.html. So it implements the render() function for App, and this one incorporates the different Components.
   ``` JavaScript
   import React, { Component } from 'react';
   import logo from './logo.svg';
   import './App.css';
   import Konami from './components/Konami'; // this one we created!

   class App extends Component {
     render() {
       return (
         <div className="App">
           <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h1 className="App-title">Welcome to el rebaño de la oveja</h1>
           </header>
           <p className="App-intro">
             To get started, edit <code>src/App.js</code> and save to reload.
           </p>
           <Konami /> // incorporates the component in the UI.
         </div>
       );
     }
   }

   export default App;
   ```
   So our task is to create the components (in the folder components, below) and to implement the required lifecycle functions there.
   - components --> Cassidy creates this folder for the components she creates. And this is the example of the Konami component referenced above.
   ``` JavaScript
   import React, { Component } from 'react';
   import Mousetrap from 'mousetrap';

   class Konami extends Component {
      constructor(){
         super();
      }

      componentDidMount() {
         Mousetrap.bind([`1 2 3 4`,`up up down down left right left right b a`],this.popUp);
      }

      componentWillUnmount(){
         Mousetrap.unbind([`1 2 3 4`,`up up down down left right left right b a`]);

      }

      popUp(){
         alert('The Konami code happened!');
      }

     render() {
       return (
         <div>Hello this is Konami!</div>
       );
     }
   }
   export default Konami;
   ```
