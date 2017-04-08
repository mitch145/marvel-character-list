// Vendor Components
import React, {Component} from 'react';

// Material-UI Components
// import TextField from 'material-ui/TextField';

export default class Header extends Component {
    render(){
        return(
            <div className="header">
                <h1 className="title">Marvel Character List</h1>
                {/*<div className="search">
                    <TextField className="search-field" hintText="Search Characters"/>
                </div>*/}
            </div>
        )
    }
}