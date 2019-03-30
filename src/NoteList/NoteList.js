import React, { Component} from 'react';
import Note from '../Note/Note';
import './NoteList.css';

class NoteList extends Component{
    render(){
        return(
            <div className='noteList'>
                <ul>
                    <li>
                        <Note></Note>
                    </li>
                    <li>
                        <Note></Note>
                    </li>
                    <li>
                        <Note></Note>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NoteList;