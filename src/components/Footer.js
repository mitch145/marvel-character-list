// Vendor Components
import React, {Component} from 'react';

// Material-UI Components
import RaisedButton from 'material-ui/RaisedButton';

export default class Header extends Component {
    render() {
        return (
            <div className="footer">
                <RaisedButton
                    className="button"
                    label="Prev"
                    onTouchTap={() => {this.props.loadCharacters(this.props.limit, this.props.offset - 20)}}
                    disabled={this.props.offset === 0}/>
                <RaisedButton
                    className="button"
                    label="Next"
                    onTouchTap={() => {this.props.loadCharacters(this.props.limit, this.props.offset + 20)}}
                    disabled={this.props.total - this.props.offset < 20}/>
            </div>
        )
    }
}