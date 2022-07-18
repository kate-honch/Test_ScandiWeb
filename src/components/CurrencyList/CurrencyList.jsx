import React from "react";
import './CurrencyList.scss'; 

const currencyList = ['$ USD', '€ EUR','¥ JPY'];

export class CurrencyList extends React.Component {
  constructor({shownCurrencyList,changeShownCurrencyList}) {
    super({shownCurrencyList, changeShownCurrencyList})
  }
    
    closeCartList = () => {
      this.props.changeShownCurrencyList(false);
      this.setState({
        shownCurrencyList: false,
    });
  };
 
    render() {
      return(
        <>
          <ul className="currency">
            {
              currencyList.map((el) => (
                <li className="currency__item" key={el} onClick={this.closeCartList}><a className="currency__link" href="#">{el}</a></li>
              ))
            }
          </ul>
        </>
      )
    }
}