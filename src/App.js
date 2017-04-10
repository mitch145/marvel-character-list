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
      order: 'name',
      results: []
    }
  }

  // Function to load characters from marvel api
  loadCharacters = (limit, offset, order) => {
    console.log(this.state)
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
      offset: offset,
      orderBy: order
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
          // set new state
          this.setState({
            loading: false,
            offset: response.data.offset,
            limit: response.data.limit,
            total: response.data.total,
            count: response.data.count,
            results: response.data.results,
            order: response.data.orderBy
          })
        })
    }).catch((error) => {
      console.log('Error:', error)
    })
  }

  changeOrder = (order) => {
    this.loadCharacters(this.state.limit, 0, order)
  }

  changeOffset = (offset) => {
    this.loadCharacters(this.state.limit, offset, this.state.order)
  }

  // load characters on component mount
  componentDidMount = () => {
    this.loadCharacters(this.state.limit, this.state.offset, this.state.order)
  }
  
  render() {
    return (
      <div className="page">
        <Header order={this.state.order} changeOrder={this.changeOrder}/> {this.state.loading
          ? <CircularProgress className="circular-progress" color='#ffffff'/>
          : ''}
        <CharacterList results={this.state.results}/>
        <Footer
          total={this.state.total}
          offset={this.state.offset}
          changeOffset={this.changeOffset}/>
      </div>
    );
  }
}

export default App;
