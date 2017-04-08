// Vendor Components
import React, {Component} from 'react';
import 'whatwg-fetch';

// Material-UI Components
import CircularProgress from 'material-ui/CircularProgress';

// Custom Components
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import Footer from './components/Footer';

// Misc
import config from './config'

class App extends Component {

  // Set initial state
  constructor() {
    super()
    this.state = {
      loading: true,
      offset: 0,
      limit: 20,
      total: '',
      count: '',
      results: []
    }
  }

  // Function to load characters from marvel api
  loadCharacters = (limit, offset) => {
    this.setState({
      loading: true,
      results: []
    })

    // url construction
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

    // fetch api call to marvel api
    fetch(url + query).then((response) => {
      response
        .json()
        .then((response) => {
          // set response to state
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

  // load characters on component mount
  componentDidMount = () => {
    this.loadCharacters(this.state.limit, this.state.offset)
  }
  
  render() {
    return (
      <div className="page">
        <Header/> {this.state.loading
          ? <CircularProgress className="circular-progress" color='#ffffff'/>
          : ''}
        <CharacterList results={this.state.results}/>
        <Footer
          offset={this.state.offset}
          limit={this.state.limit}
          total={this.state.total}
          loadCharacters={this
          .loadCharacters
          .bind(this)}/>
      </div>
    );
  }
}

export default App;
