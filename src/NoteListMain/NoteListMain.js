import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Note from '../Note/Note'
import NoteContext from '../NoteContext'
import { getNotesForFolder } from '../notes-helpers'

class NoteListMain extends Component {
  static defaultProps = {
    match: {
        params: {}
    }
  }
  static contextType = NoteContext;
  render(){
    const { notes } = this.context
    const { folderId } = this.props.match.params
    const notesForFolder = getNotesForFolder(notes, folderId)
    return (
      <section className='NoteListMain'>
        <ul>
          {notesForFolder.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
            </li>
          )}
        </ul>
        <div className='NoteListMain__button-container'>
          <button
            tag={Link}
            to='/add-note'
            className='NoteListMain__add-note-button'
          >
            Note
          </button>
        </div>
      </section>
    )
  }
}

export default NoteListMain;
