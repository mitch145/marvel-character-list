// Vendor Components
import React, {Component} from 'react';

// Material-UI Components
import Paper from 'material-ui/Paper';

export default class CharacterCard extends Component {
    render() {
        return (
            <Paper className="character-card">
                <div className="row">
                    <img
                        className="thumbnail"
                        src={this.props.thumbnail.path + '.' + this.props.thumbnail.extension}
                        alt={this.props.name}/>
                    <h2 className="name">{this.props.name}</h2>
                </div>
            </Paper>
        )
    }
}