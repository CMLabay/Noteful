import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Header from './Header/Header';
import NotePageNav from './NotePageNav/NotePageNav'
import NoteListNav from './NoteListNav/NoteListNav';
import NoteListMain from './NoteListMain/NoteListMain';
import NotePageMain from './NotePageMain/NotePageMain';
import AddFolder from './AddFolder/AddFolder'
import AddNote from './AddNote/AddNote';
import dummyStore from './dummy-store'
import NoteContext from './NoteContext.js'


class App extends Component {
    state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    // fake date loading from API call
    //setTimeout(() => this.setState(dummyStore), 600)
    //fetch data from the api
    fetch('http://localhost:9090/folders')
    .then(response => response.json())
    .then(responseJson => {
        let folders = responseJson
        this.setState({folders})})

        fetch('http://localhost:9090/notes')
        .then(response => response.json())
        .then(responseJson => {
            let notes = responseJson
            this.setState({notes})})
  }

  renderNavRoutes(){
    return(
      <>
        {['/', '/folder/:folderId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={NoteListNav}
          />
        )}
        <Route
          path='/note/:noteId'
          component={NotePageNav}
        />
        <Route
          path='/add=folder'
          component={NotePageNav}
        />
        <Route
          path='/add-note'
          component={NotePageNav}
        />
      </>
    )
  }
  renderMainRoutes(){
    return (
      <>
      {['/', '/folder/:folderId'].map(path =>
        <Route
          exact
          key={path}
          path={path}
          component={NoteListMain}
        />
      )}
      <Route
        path='/note/:noteId'
        component={NotePageMain}
      />
      <Route
        path='/add-folder'
        component={AddFolder}
      />
      <Route
        path='add-note'
        component={AddNote}
      />
    </>
    )
  }
  render(){
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
    }
    return (
      <NoteContext.Provider value={contextValue}>
        <div className='App'>
          <Header></Header>
          <nav className="App__nav">
            {this.renderNavRoutes()}
          </nav>
          <main className='App__main'>
            {this.renderMainRoutes()}
          </main>
        </div>
      </NoteContext.Provider>
    );
  }
}

export default App;