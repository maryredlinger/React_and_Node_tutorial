import React from 'react';

class App extends React.Component {

  state = {
    gm_product_info: []
  }
  componentDidMount() {
    fetch('http://localhost:4000/kurt_test')
    .then(response => response.json())
    .then(response => this.setState({ gm_product_info: response.data }))
    .catch(err => console.error(err))
  } 


  renderProduct = <div key={this.state.gm_product_info.category_info_id}></div>

  render() {
    const { gm_product_info } = this.state;

    return (
      <div className="App">
        <h1>hey world</h1>
          {gm_product_info.map(gm_product_info => <div>{gm_product_info.product_name}</div>)}
      </div>
    );
  }
}

export default App;
