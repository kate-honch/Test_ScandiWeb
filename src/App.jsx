import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Category } from './components/Category/Category';

class App extends React.Component {
  state = {
    quantityProducts: 0,
    shownProductPage: false,
    shownCartPage: false,
  };

  changeShownProductPage = (value) => {
    this.setState({shownProductPage: value});
  }

  changeShownCartPage = (value) => {
    this.setState({shownCartPage: value});
  }

  changeAddNumCard = (value) => {
    this.setState({quantityProducts: value});
  }

  render() {
    const { quantityProducts ,shownProductPage, shownCartPage } = this.state;
      return (
        <>
          <Header shownCartPage={shownCartPage} shownProductPage={shownProductPage} quantityProducts={quantityProducts} changeShownProductPage={this.changeShownProductPage} changeShownCartPage={this.changeShownCartPage}/>
          <Category shownCartPage={shownCartPage} shownProductPage={shownProductPage} quantityProducts={quantityProducts} changeAddNumCard={this.changeAddNumCard} />
        </>
      );
  }
}

export default App;
