import React, {Component} from 'react';
import './Note.css'

class Note extends Component{
    render(){
        return(
            <div 
                className='noteItem' 
                id={this.props.id}
                folderId={this.props.folderId}>
                <a href='' >{this.props.content}</a>
                <p>Date Modified:{this.props.modified}</p>
                <button className='deleteBtn'>Delete</button>
            </div>
        )
    }
}

export default Note;