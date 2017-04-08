// Vendor Components
import React, {Component} from 'react';

// Custom Components
import CharacterCard from './CharacterCard'

export default class CharacterList extends Component {
    render() {

        // Generate character cards from results array
        let characterCards = this.props.results.map((result) => {
            let detail = '';
            let wiki = '';
            let comiclink = '';
            for(let i = 0; i < result.urls.length; i++){
                let urlObject = result.urls[i]
                switch(urlObject.type){
                    case "detail":
                        detail = urlObject.url;
                        break;
                    case "wiki":
                        wiki = urlObject.url;
                        break;
                    case "comiclink":
                        comiclink = urlObject.url;
                        break;
                    default:
                        break;
                }
            }
            return (<CharacterCard
                name={result.name}
                thumbnail={result.thumbnail}
                description={result.description ? result.description : 'Description not found.' }
                page={detail}
                wiki={wiki}
                comics={comiclink}/>)
            })
        return (
            <div className="character-list">
                {characterCards}
            </div>
        )
    }
}