import React, { Component } from 'react';

import 'milligram';

import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

class App extends Component {

    constructor(){
    super();
    this.change = this.change.bind(this);
    this.addNote = this.addNote.bind(this);
    this.clearNote = this.clearNote.bind(this);
  }

  clearNote(){
    console.log('erase note');
  }

  addNote(){
    console.log('add note!');
    if (!localStorage.getItem("notes")){
      localStorage.setItem("notes",'[]');
    }
    var lista=JSON.parse(localStorage.getItem("notes"));
    lista.push('again');
    localStorage.setItem("notes",JSON.stringify(lista));
  }

  change(){
    console.log('changed!');
  }
  
  render() {
    return (
      <div className="App container">
      <h1>marky mark</h1>
        <div className="row">
          <Sidebar addNote={this.addNote} clearNote={this.clearNote}/>
          <Editor change={this.change} />
          </div>
      </div>
    );
  }
}

export default App;
