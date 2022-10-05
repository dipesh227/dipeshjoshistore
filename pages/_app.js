import { useEffect, useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // console.log('hy')
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        setSubtotal(localStorage.getItem("subtotal"));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    let keys = Object.keys(cart);
    localStorage.setItem("cart", JSON.stringify(myCart));
    // console.log(keys.length);
    if (keys.length == 1) {
      let subt = 0;
      for (let i = 0; i < keys.length; i++) {
        subt += myCart[keys[i]]["itemPrice"] * myCart[keys[i]].itemQty;
      }
      setSubtotal(subt);
      localStorage.setItem("subtotal", subt);
    } else {
      setSubtotal(0);
      localStorage.setItem("subtotal", 0);
    }
  };

  const addToCart = (
    itemCode,
    itemQty,
    itemPrice,
    itemName,
    itemSize,
    itemVariant
  ) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].itemQty = cart[itemCode].itemQty + itemQty;
    } else {
      newCart[itemCode] = {
        itemQty: itemQty,
        itemPrice,
        itemName,
        itemSize,
        itemVariant,
      };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    // let keys = Object.keys(cart);
    const setcart = setCart({});
    const setsubtotal = setSubtotal([]);
    localStorage.setItem("cart", setcart);
    localStorage.setItem("subtotal", setsubtotal);
    // console.log(keys.length);
  };

  const removeFromCart = (itemCode, itemQty) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].itemQty = cart[itemCode].itemQty - itemQty;
    }

    if (newCart[itemCode].itemQty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  return (
    <>
      <Head>
        <title>Dipesh</title>
        <meta name="description" content="Shop any thing what u wants" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Header />
      <Navbar
        subtotal={subtotal}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <Component
        // key={subtotal}
        subtotal={subtotal}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
