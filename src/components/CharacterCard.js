// Vendor Components
import React, {Component} from 'react';

// Material-UI Components
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

export default class CharacterCard extends Component {
    toggleActive = () => {
        if (this.props.active) {
            this
                .props
                .setActive(null)
        } else {
            this
                .props
                .setActive(this.props.id)
        }
    }
    render() {
        return (
            <Paper className="character-card hvr hvr-grow">
                    <div className="row row-padded" onTouchTap={this.toggleActive}>
                        <img
                            className="thumbnail"
                            src={this.props.thumbnail.path + '.' + this.props.thumbnail.extension}
                            alt={this.props.name}/>
                        <h2 className="name">{this.props.name}</h2>
                    </div>
                {this.props.active
                    ? (
                        <div>
                            <div className="row row-padded" onTouchTap={this.toggleActive}>
                                <p>{this.props.description}</p>
                            </div>
                            <div className="row row-centered">
                                <RaisedButton
                                    className="button"
                                    label="Page"
                                    primary={true}
                                    href={this.props.page}
                                    target="_blank"/>
                                <RaisedButton
                                    className="button"
                                    label="Wiki"
                                    primary={true}
                                    href={this.props.wiki}
                                    target="_blank"/>
                                <RaisedButton
                                    className="button"
                                    label="Comics"
                                    primary={true}
                                    href={this.props.comics}
                                    target="_blank"/>
                            </div>
                        </div>
                    )
                    : ''}
            </Paper>
        )
    }
}