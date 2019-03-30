import React, {Component} from 'react';
import Folder from '../Folder/Folder';
import './FolderList.css';

class FolderList extends Component{
    render(){
        return(
            <ul>
                <li className='FolderItem'>
                    <Folder></Folder>
                </li>
                <li className='FolderItem'>
                    <Folder></Folder>
                </li>
                <li className='FolderItem'> 
                    <Folder></Folder>
                </li>
                <li className='FolderItem'>
                    <Folder></Folder>
                </li>
            </ul>
        )
    }
}

export default FolderList;