import React from "react";
import './CheckOutPage.scss';
import file1 from '../../images/009.png';
import file2 from '../../images/008.png';

const cartList = [
  {
    title: 'Apollo Running Short',
    price: '$50.00',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['grey','black','green'],
    img: file1,
    id:1,
    count: 0,
  },
  {
    title: 'Jupiter Wayfarer',
    price: '$75.00',
    sizes: [ 'S', 'M'],
    colors: ['black','blue','orange'],
    img: file2,
    id:2,
    count: 0,
  }
];

export class CheckOutPage extends React.Component {
  
  state= {
    upDateProduct: cartList,
  };

  addProduct = (id) => {
    const currentProduct = cartList.find((el) => el.id === id);
    currentProduct.count = currentProduct.count + 1;
    this.setState({
      upDateProduct: [...cartList],
    });
  };

  removeProduct = (id) => {
    const currentProduct = cartList.find((el) => el.id === id);
    currentProduct.count = currentProduct.count !== 0 ? currentProduct.count -1 : 0;
    this.setState({
      upDateProduct: [...cartList],
    });
  };

  render() {
      return(
      <div className="cart-page">
        <h1 className="cart-page__name">CART</h1>
        {
          cartList.map((el) => (
            <div className="cart-page__main-container">
            <div className="cart-page__left-container">
              <h3 key={el.id} className="cart-page__title">{el.title}</h3>
              <p className="cart-page__value-price">{el.price}</p>
              <p className="cart-page__sizes">Size:</p>
              <div className="cart-page__sizes-btn">
                {
                  el.sizes.map((size) => (
                    <button key={size} className="cart-page__size-btn">{size}</button>
                  ))
                }
              </div>
              <p className="cart-page__colors">Color:</p>
              {
                el.colors.map((color) => (
                  <button key={color} data-bg={color} className="cart-page__color-btn">{color}</button>
                ))
              }
            </div>
            <div className="cart-page__right-container">
              <div className="cart-page__count">
                <button onClick={() => this.addProduct(el.id)}>+</button>
                <span>{el.count}</span>
                <button onClick={() => this.removeProduct(el.id)}>-</button>
              </div> 
              <img src={el.img} alt="product" />
              <div className="cart-page__arrow-btn">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="black" fill-opacity="0.73"/>
                    <path d="M14.25 6.06857L8.625 11.6876L14.25 17.3066" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="black" fill-opacity="0.73"/>
                    <path d="M9.75 6.06808L15.375 11.6871L9.75 17.3062" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                </div>
              </div>
              </div>
          ))
        }
        <div className="cart-page__info">
          <p className="cart-page__text">Tax 21%: <span className="cart-page__num">$42.00</span></p>
          <p className="cart-page__text">Quantity: <span className="cart-page__num">3</span></p>
          <p className="cart-page__text">Total: <span className="cart-page__num">$200.00</span></p>
          <button className="cart-page__order-btn">ORDER</button>
        </div>
      </div> 
    )
  }
  
}
