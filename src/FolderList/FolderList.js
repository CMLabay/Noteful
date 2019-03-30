import React, {Component} from 'react';
import Folder from '../Folder/Folder';
import './FolderList.css';

class FolderList extends Component{
    render(){
        return(
            <ul>
            {Object.keys(this.props.folders)
                .map(key => {
                    return(
                        <li className='FolderItem'>
                            <Folder
                                key={key}
                                id={this.props.folders[key].id}
                                name={this.props.folders[key].name}
                            /> 
                        </li>  
                    )
                })}
            </ul>    
        )
    }
}

export default FolderList;