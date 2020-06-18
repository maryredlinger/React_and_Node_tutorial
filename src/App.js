import React from 'react';
import Home from './pages/Home'

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
        <Home bs_search_detail_info={this.state.bs_search_detail_info} />
      </div>
    );
  }
}

export default App;
