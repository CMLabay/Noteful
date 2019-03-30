import React, { Component} from 'react';
import Note from '../Note/Note';
import './NoteList.css';

class NoteList extends Component{
    render(){
        return(
            <div className='noteList'>
                <ul>
                    {Object.keys(this.props.notes)
                    .map(key => {
                        return(
                            <li>
                                <Note
                                    key={key}
                                    id={this.props.notes[key].id}
                                    modified={this.props.notes[key].modified}
                                    folderId={this.props.notes[key].folderId}
                                    content={this.props.notes[key].content}
                                ></Note>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default NoteList;