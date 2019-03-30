import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import NoteList from './NoteList/NoteList';

class App extends Component {


  render(){
    return (
      <div>
        <Header></Header>
        <Sidebar></Sidebar>
        <NoteList></NoteList>
        <main className='App'>
          {/* content goes here */}
        </main>
      </div>
    );
  }
}

export default App;