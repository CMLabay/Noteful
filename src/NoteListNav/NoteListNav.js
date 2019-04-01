import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom'
import { countNotesForFolder } from '../notes-helpers'
import NoteContext from '../NoteContext.js'

class NoteListNav extends Component{
    static contextType = NoteContext;
    render(){
        const { folders } = this.context
        return (
            <div className='NoteListNav'>
                <ul className='NoteListNav__list'>
                    {folders.map(folder =>
                        <li key={folder.id}>
                            <NavLink
                                className='NoteListNav__folder-link'
                                to={`/folder/${folder.id}`}
                            >
                                {folder.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
                <div className='NoteListNav__button-wrapper'>
                    <button
                        tag={Link}
                        to='/add-folder'
                        type='button'
                        className='NoteListNav__add-folder-button'
                    >
                    Folder
                    </button>
                </div>
            </div>
        )
    } 
}

export default NoteListNav;
NoteListNav.defaultProps = {
    folders: []
}