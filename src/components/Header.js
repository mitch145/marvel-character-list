// Vendor Components
import React, {Component} from 'react';

// Material-UI Components
import RaisedButton from 'material-ui/RaisedButton'

export default class Header extends Component {
    // Change order according to requested button press
    orderBy = (newOrder) => {
        console.log(this.props.order == 'name')
        // If name pressed
        if (newOrder == 'name') {
            // First case, set order to -name
            if (this.props.order == 'name') {
                this.props.changeOrder('-name')
            // Other three cases, set order to name
            } else {
                this.props.changeOrder('name')
            }
        } else if(newOrder == 'modified'){
            // First case, set order to -modified
            if (this.props.order == 'modified') {
                this.props.changeOrder('-modified')
            // Other three cases, set order to modified
            } else {
                this.props.changeOrder('modified')
            }
        }
    }
    render() {
        return (
            <div className="header">
                <h1 className="title">Marvel Character List</h1>
                <div className="row row-centered">
                    <p>Order:</p>
                    <RaisedButton
                        onTouchTap={() => {this.orderBy('name')}}
                        className="button"
                        label="Name"/>
                    <RaisedButton
                        onTouchTap={() => {this.orderBy('modified')}}
                        className="button"
                        label="Modified"/>
                </div>
            </div>
        )
    }
}