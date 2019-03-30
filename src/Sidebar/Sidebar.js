import React, {Component} from 'react';
import FolderList from '../FolderList/FolderList';
import './Sidebar.css';

class Sidebar extends Component{
    render(){
        console.log('this.props.folders ', this.props.folders)
        return(
            <div className='sideBar'>
                <FolderList folders={this.props.folders}></FolderList>              
                <div className='addNew sideBar'>Add New</div>
            </div>)
    }
}

export default Sidebar;