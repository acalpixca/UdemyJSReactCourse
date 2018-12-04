import React, { Component } from 'react';

import 'milligram';

import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

class App extends Component {
  constructor(){
    super();
    this.change = this.change.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  addNote(){
    console.log('added note!');
  }

  change(){
    console.log('changed!');
  }
  render() {
    return (
      <div className="App container">
      <h1>marky mark</h1>
        <div className="row">
          <Sidebar addNote={this.addNote}/>
          <Editor change={this.change} />
          </div>
      </div>
    );
  }
}

export default App;
