import React from 'react';
import { Container } from "./styled";

const CartDetail = ({ cart, getCartTotal, resetCart, removeItem, editQuantity, cartTotalItems }) => {

  return (
    <Container>
      {cart.map(({ id, name, price, quantity }) => (
        <ul>
            <li>
              <p>{name}</p>
              <div className="addOrDelete">
                <button
                  className="btn"
                  disabled={quantity === 1 ? true : false}
                  onClick={() =>
                    editQuantity({ id, name, price, quantity: -1 })
                  }
                >
                  -
                </button>
                <label> {quantity} </label>
                <button
                  className="btn"
                  onClick={() =>
                    editQuantity({ id, name, price, quantity: 1 })
                  }
                >
                  +
                </button>
                </div>
                <button className="btnend" onClick={() => removeItem(id)}>
                  Remove
                </button>
              <p className="precio">{price} €</p>
            </li>
        </ul>
      ))}
      
      {cartTotalItems() > 0 ? (
        <div className="final">
          <h3 className='total'>Total: {getCartTotal()} €</h3>
          <button className="btnempty" onClick={() => resetCart()}>
            Empty cart
          </button>
        </div>
      ) : (
        <div className="final2">
          <p className="preciototal">The cart is empty. Add some products!</p>
        </div>
      )}
    </Container>
  );
};

export default CartDetail;