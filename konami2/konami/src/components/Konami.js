import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

class Konami extends Component {

/*  constructor(){
    super();
  }
*/
  componentDidMount(){
    Mousetrap.bind([`1 2 3 4`, `up up down down left right left right b a`], this.popUp);
  }

  componentWillUnmount(){
    Mousetrap.unbind([`1 2 3 4`, `up up down down left right left right b a`], this.popUp);
  }
popUp(){
  alert('The Konami code happened!');

}
  render() {
    return (
      <div>Hello {this.props.name}, this is Konami!</div>
    );
  }
}

export default Konami;
