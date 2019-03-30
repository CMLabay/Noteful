import React, {Component} from 'react';

class Folder extends Component{
    render(){
        console.log('folder name ', this.props.name)
        return(
            <div id={this.props.id}>
                {this.props.name}
            </div>
        )
    }
}

export default Folder;