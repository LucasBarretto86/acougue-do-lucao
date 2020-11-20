import React from 'react';
import './App.css';

import Nav from '../Nav/Nav'
import ProductList from '../ProductList/ProductList'


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [
        { name: "Alcatra", image_url: "alcatra.png" },
        { name: "Picanha", image_url: "picanha.jpg" },
        { name: "Chuleta", image_url: "chuleta.png" }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <img className="header__logo" src="logo.png" alt="Um bifão muito gostoso" />
          <h1>Açougue do Lucão</h1>
        </header>

        <Nav />
        <ProductList products={this.state.products} />

        <footer>® 2020 - Todos os direitos reservados.</footer>
      </div>
    )
  }
}

export default App;
