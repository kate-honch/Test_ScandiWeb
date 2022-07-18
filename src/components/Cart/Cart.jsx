import React from "react";
import './Cart.scss';
import { CartList } from "../CartList/CartList";

export class Cart extends React.Component {
    constructor({quantityProducts, changeShownCartList, shownProductPage, shownCartPage, changeShownProductPage, changeShownCartPage}){
      super({quantityProducts, changeShownCartList, shownProductPage, shownCartPage, changeShownProductPage, changeShownCartPage});
    }

    openViewBtn = () => {
      this.props.changeShownProductPage(true);
      this.props.changeShownCartList(false);
    }

    openCheckBtn = () => {
      this.props.changeShownCartPage(true);
      this.props.changeShownProductPage(false);
      this.props.changeShownCartList(false);
    }
    
    render() {
      return (
        <div className="header__cart-list">
          <h3 className="header__cart-list-title">My Bag,<span>{this.props.quantityProducts} items</span></h3>
          <CartList />
          <div className="header__totalSum">
            <span>Total</span>
            <span>$200.00</span>
          </div>
          <div className="header__check-btns">
            <button className="header__viewBag-btn" onClick={this.openViewBtn}>VIEW BAG</button>
            <button className="header__checkOut-btn" onClick={this.openCheckBtn}>CHECK OUT</button>
          </div>
        </div>
      );
    };
  };
