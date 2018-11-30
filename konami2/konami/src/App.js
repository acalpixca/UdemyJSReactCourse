import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Konami from './components/Konami';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activated: false,
      name: ''
    };

    this.toggleActivation = this.toggleActivation.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e){
    console.log(e.target.value);
    this.setState({name: e.target.value});
  }

  toggleActivation(){
    if (this.state.activated === true) {
      this.setState({activated: false});
    }
    else {
      this.setState({activated: true});
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.toggleActivation}>Toggle Konami Code!</button>

        {
          this.state.activated ? <Konami name={this.state.name}/> : <div>Konami Code Deactivated</div>
        }
      </div>

    );
  }
}

export default App;
