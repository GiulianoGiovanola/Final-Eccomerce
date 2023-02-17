import React, { useState, useContext } from "react";
import { Grid, Col } from "../Components/Grid";
import CheckoutForm from "../Components/CheckoutForm/CheckoutForm";
import { CartContext } from "../Contexts/CartContext";
import CartDetail from "../Components/CartDetail/CartDetail";
import { getFirestore, getDate } from "../services/firebase";
import { Container } from "../Components/pageCheckout/styled";
import NavbarStatic from "../Components/NavbarStatic/NavbarStatic";

const Checkout = () => {
  const {
    cart,
    getCartTotal,
    setCart,
    resetCart,
    removeItem,
    addToCart,
    cartTotalItems,
  } = useContext(CartContext);
  const [orderCreated, setOrderCreated] = useState(false);

  console.log(cart);

  const placeOrder = async (buyerData) => {
    //Vamos a preparar el pedido
    //1-tenemos los datos del usuario (values)

    //2-tenemos el estado del carrito

    //3-Escribimos la orden en fireba

    try {
      const db = getFirestore();
      console.log(`order N ${buyerData.name}`);

      const cartItems = cart.map(({ id, name, price, quantity }) => {
        return { id, name, price, quantity };
      });

      console.log(cartItems);

      const order = {
        buyer: buyerData,
        items: cartItems,
        date: getDate(),
        total: getCartTotal(),
      };

      const res = await db.collection("orders").add(order);
      setCart([]);
      setOrderCreated(res.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavbarStatic />
      <Container>
        <Grid>
          <Col desktop={12} tablet={6} mobile={12}>
            {orderCreated ? (
              <h2>Checkout {`Order N° ${orderCreated}`}</h2>
            ) : (
              <h2>Checkout</h2>
            )}
          </Col>
          {cartTotalItems() > 0 ? (
            <Col desktop={12} tablet={6} mobile={12}>
              <CheckoutForm
                handleSubmit={placeOrder}
                cartTotalItems={cartTotalItems}
              />
            </Col>
          ) : (
            <></>
          )}
          <Col desktop={12} tablet={6} mobile={12}>
            <CartDetail
              cart={cart}
              getCartTotal={getCartTotal}
              resetCart={resetCart}
              removeItem={removeItem}
              editQuantity={addToCart}
              cartTotalItems={cartTotalItems}
            />
          </Col>
        </Grid>
      </Container>
    </>
  );
};

export default Checkout;
