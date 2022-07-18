import React from "react";
import './CartList.scss';
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
    title: 'Jupiter <br/> Wayfarer',
    price: '$75.00',
    sizes: [ 'S', 'M'],
    colors: ['black','blue','orange'],
    img: file2,
    id:2,
    count: 0,
  }
  ];

export class CartList extends React.Component {

  state = {
    upDateProduct: cartList,
  };

  addProduct = (id) => {
    const currentProduct = cartList.find((el) => el.id === id);
    currentProduct.count = currentProduct.count + 1;
      this.setState({
        upDateProduct: [...cartList],
      });
  }

  removeProduct = (id) => {
    const currentProduct = cartList.find((el) => el.id === id);
    currentProduct.count = currentProduct.count !== 0 ? currentProduct.count -1 : 0 ;
      this.setState({
        upDateProduct: [...cartList],
      });
  }

  render() {
      return(
        <>
          {
            this.state.upDateProduct.map((el) => (
              <div key={el.id} className="cart">
                <div className="cart__description" key={el.id}>
                  <p className="cart__title" >{el.title}</p>
                  <p className="cart__price">{el.price}</p>
                  <p className="cart__size">Size:</p>
                  {
                    el.sizes.map((size) => (
                      <button key={size} className="cart__size-btns">{size}</button>
                    ))
                  }
                  <p className="cart__color">Color:</p>
                  {
                    el.colors.map((color) => (
                      <button key={color} data-bg={color} className="cart__color-btns"></button>
                    ))
                  }
                </div>
                <div className="cart__count">
                  <button onClick={() => this.addProduct(el.id)}>+</button>
                  <span>{el.count}</span>
                  <button onClick={() => this.removeProduct(el.id)}>-</button>
                </div>
                <img src={el.img} alt="product" />
              </div>
            ))
          }
        </>
      )
  }
}