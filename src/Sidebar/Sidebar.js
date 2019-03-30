import React, {Component} from 'react';
import FolderList from '../FolderList/FolderList';
import './Sidebar.css';

class Sidebar extends Component{
    render(){
        return(
        <div className='sideBar'>
            <FolderList></FolderList>
            <div className='addNew sideBar'>Add New</div>
        </div>)
    }
}

export default Sidebar;