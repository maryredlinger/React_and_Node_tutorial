import React from 'react';
import { BrowserRouter as Router, 
          Switch,
          Route
} from 'react-router-dom';

import Home from './pages/Home'
import Parent from './pages/Parent'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      bs_search_detail_info: []
    }
  }

    componentDidMount () {
      fetch('http://localhost:4000/home')
      .then(response => response.json())
      .then(response => this.setState({ bs_search_detail_info: response.data }))
      .catch(err => console.error(err))
    } 
  
  
  render(){
    return (
      <div>
        <h1>Got Mary</h1>
        <Router>
          <Route path="/" exact render={(props) =><Home bs_search_detail_info={this.state.bs_search_detail_info} />} />
          <Route path="/:id" exact render={(props) =><Parent bs_search_detail_info={this.state.bs_search_detail_info} />} />
        </Router>
      </div>
    );
  }
}

export default App;
