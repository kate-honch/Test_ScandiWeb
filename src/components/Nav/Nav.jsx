import React from "react";
import './Nav.scss';

const navList = ['Women', 'Men', 'Kids'];

export class Nav extends React.Component {
  render() {
    return(
      <nav className="nav">
        <ul className="nav__list">
            {
              navList.map((el) => (
                <li className="nav__item" key={el}><a className="nav__list-link" href="#">{el}</a></li>
              ))
            }
        </ul>
      </nav>
    )
  }
}