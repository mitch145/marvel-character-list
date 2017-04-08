// Vendor Components
import React, {Component} from 'react';

// Material-UI Components
import Paper from 'material-ui/Paper';


export default class CharacterCard extends Component{
    render(){
        return(
            <Paper className="character-card">
                <h2>{this.props.name}</h2>
            </Paper>
        )
    }
}