# JavaScript and React for Devs - Udemy - Cassidy Williams

## React Component Types

* Container components
* Presentational components

The difference is not how you write them but how you use them.

### Presentational components

They deal with how things look, everything to do with the DOM. Nothing about data being pulled in, or processed.

They can also be written as stateless functional components (like lambda functions).

Instead of this:
``` JavaScript
class Aquarium extends Component {
  constructor(props) {
    super(props);
  }
  // ...
  render(){
    let fish = getFish(this.props.species);
    return <Tank>{fish}</Tank>;
  }
}
```
A stateless function will look like this:
``` JavaScript
var Aquarium = (props) => {
  var fish=getFish(props.species);
  return <Tank>{fish}</Tank>;
};
```
Then you use the component like this, regardless of how you defined the component:
``` JavaScript
<Aquarium species="pufferfish" />
```
The stateless functional way has one drawback: it doesn't have as many features as a regular React component has. The component lifecycle methods are not available if you do it this way. But if you're doing pure Presentational components then you don't need them anyway. They just pass you the data (the props) and you just render it.

### Container components

These don't care how things look, but how things work. Hardly ever they contain styles. They are there for providing data and behaviours for other components. Never written as functional components, because they use the component lifecycle methods a lot.

Better separation of concerns, they promote reusability too.

How do we go about creating the App? Cassidy prefers to start with the Presentational components, and as you start to pass more props between components, you group them into container components.
