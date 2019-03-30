import React, {Component} from 'react';
import './Note.css'

class Note extends Component{
    render(){
        return(
            <div className='noteItem'>
                <a href='' >Note</a>
                <p>Date Modified:Today</p>
                <button className='deleteBtn'>Delete</button>
            </div>
        )
    }
}

export default Note;