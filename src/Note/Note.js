import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Note.css'
import { format } from 'date-fns'
import NoteContext from '../NoteContext.js'
import PropTypes from 'prop-types'

export default class Note extends Component{
    static defaultProps = {
        onDeleteNote: () => {},
    }
    static contextType = NoteContext;

    handleClickDelete = e => {
        e.preventDefault()
        const noteId = this.props.id
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
          })
            .then(res => {
              if (!res.ok)
                return res.json().then(e => Promise.reject(e))
              return res.json()
            })
            .then(() => {
              this.context.deleteNote(noteId)
              this.props.onDeleteNote(noteId)
            })
            .catch(error => {
              console.error({ error })
            })
    }
    render(){
        const { name, id, modified } = this.props
        console.log('date ', modified)
        return(
          <div className='Note'>
              <h2 className='Note__title'>
                  <Link to={`/note/${id}`}>
                      {name}
                  </Link>
              </h2>
              <button 
                  className='Note__delete'
                  onClick={this.handleClickDelete}
                  type='button'>Delete</button>
              <div className='Note__dates'>
                  <div className='Note__dates-modified'>
                      Modified
                      {' '}
                      <span className='Date'>
                          {format(modified, 'Do MMM YYYY')}
                      </span>
                  </div>
              </div>
          </div>
        )
    }
}
Note.propTypes = {
  modified: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};