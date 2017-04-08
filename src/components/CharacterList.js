// Vendor Components
import React, {Component} from 'react';

// Custom Components
import CharacterCard from './CharacterCard'

export default class CharacterList extends Component {
    render() {
        let characterCards = this.props.results.map((result) => {
                return (<CharacterCard name={result.name} thumbnail={result.thumbnail}/>)
            })
        return (
            <div className="character-list">
                {characterCards}
            </div>
        )
    }
}