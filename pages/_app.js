import { useEffect, useState } from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    console.log('hy')
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])

  const saveCart = (myCart) => {
    // console.log(localStorage.setItem("cart", JSON.stringify(myCart)))

    let subt = 0;
    let keys = Object.keys(cart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]]["itemPrice"] * myCart[keys[i]].itemQty;
    }
    setSubtotal(subt)
  }

  const addToCart = (itemCode, itemQty, itemPrice, itemName, itemSize, itemVariant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].itemQty = cart[itemCode].itemQty + itemQty
    }
    else {
      newCart[itemCode] = { itemQty: itemQty, itemPrice, itemName, itemSize, itemVariant }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    localStorage.clear()
    // saveCart({})
    // console.log('Cart is clear')

  }

  const removeFromCart = (itemCode, itemQty, itemPrice, itemName, itemSize, itemVariant) => {
    let newCart = cart;

    if (itemCode in cart) {
      newCart[itemCode].itemQty = cart[itemCode].itemQty - itemQty
    }
    // console.log(newCart)
    if (newCart[itemCode].itemQty <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  return (
    <>
      <Head>
        <title>Dipesh</title>
        <meta name="description" content="Shop any thing what u wants" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Header />
      <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal} />
      < Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal} {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
