// Vendor Components
import React, {Component} from 'react';
import 'whatwg-fetch';

// Material-UI Components
import CircularProgress from 'material-ui/CircularProgress';

// Custom Components
import Header from './components/Header';
import CharacterList from './components/CharacterList';

// Misc
import config from './config'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      offset: '',
      limit: '',
      total: '',
      count: '',
      results: []
    }
  }

  loadCharacters = (limit, offset) => {

    let url = 'http://gateway.marvel.com/v1/public/characters?'

    let params = {
      apikey: config.apikey,
      ts: config.ts,
      hash: config.hash,
      limit: limit,
      offset: offset
    }

    let query = Object
      .keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');

    fetch(url + query).then((response) => {
      response
        .json()
        .then((response) => {
          this.setState({
            loading: false,
            offset: response.data.offset,
            limit: response.data.limit,
            total: response.data.total,
            count: response.data.count,
            results: response.data.results
          })
        })
    }).catch((error) => {
      console.log('Error:', error)
    })
  }
  componentDidMount = () => {
    this.loadCharacters(20, 0)
  }
  render() {
    return (
      <div className="page">
        <Header/> {this.state.loading
          ? <CircularProgress className="circular-progress" color='#ffffff'/>
          : ''}
        <CharacterList results={this.state.results}/>
      </div>
    );
  }
}

export default App;
