import React from "react";
import './ViewPage.scss';
import file1 from '../../images/001.png';


const productList = [
  {
    img: file1,
    title: 'Apollo Running Short', 
    price:'$50.00',
    id:1,
    firm: 'Apollo',
    name: 'Running Short',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['grey','black','green'],
    description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
  }
];

export class ViewPage extends React.Component {
  
  render() {
    return(
      <> 
        {
          productList.map((el) => (
          <div key={el.id} className="productList">
            <div className="productList__small-images">
              <img className="productList__small-img" src={el.img} alt="product"/>
              <img className="productList__small-img" src={el.img} alt="product"/>
              <img className="productList__small-img" src={el.img} alt="product"/>
            </div>
            <img className="productList__main-img" src={el.img} alt="product"/>
        
            <div className="productList__info">
              <h2 className="productList__firm">{el.firm}</h2>
              <h3 className="productList__name">{el.name}</h3>
              <p className="productList__sizes">SIZE:</p>
              <div className="productList__sizes_btn" >
                {
                  el.sizes.map((size) => (
                    <button key={size} className="productList__size-btn">{size}</button>
                  ))
                }
              </div>
              <p className="productList__colors">COLOR:</p>
              <div className="productList__colors-btn">
                {
                  el.colors.map((color) => (
                    <button key = {color} data-bg={color} className="productList__color-btn"> {color}</button>
                  ))
                }
              </div>
              <p className="productList__price">PRICE: </p>
              <p className="productList__value-price">{el.price}</p>
              <button className="productList__add-btn">ADD TO CART</button>
              <p className="productList__description">{el.description}</p>
            </div>
          </div>
          ))
        }
    </>
    )
  }
}