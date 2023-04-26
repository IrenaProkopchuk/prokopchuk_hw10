import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const productIds = [1, 2, 3, 4, 5];
  
    return (
      <ul>
        <li>
          <NavLink className="link" to={"/"}>
            Main
          </NavLink>
        </li>
   
        <li>
          <NavLink className="link" to={"/contacts"}>
            Contacts
          </NavLink>
        </li>
  
        <li>
          <NavLink className="link" to={"/private"}>
            Private
          </NavLink>
        </li>
  
        <li>
          <NavLink className="link" to={"/products"}>
            Products
          </NavLink>
        </li>
  
  
  
        {productIds.map(productId => {
          return (
            <li key={productId}>
              <NavLink className="link" to={`/products/${productId}`}>
                Product = {productId}
              </NavLink>
            </li>
          )
        })}
      </ul>
    )
  }
  

export default Navigation;