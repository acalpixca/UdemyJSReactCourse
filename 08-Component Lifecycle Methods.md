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
