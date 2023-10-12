import logo from "./logo.svg"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/Header/Header"
import Store from "./components/Store/Store"
import DataProvider from "./components/Context/DataProvider"
import Footer from "./components/Footer/Footer"
import MyPortal from "./components/Portal/MyPortal"
import Cart from "./components/Cart/Cart"
import React, { useState } from "react"
import About from "./components/About/About"
function App() {
  const [showCart, setShowCart] = useState(false)

  const handleShowCart = (a) => {
    setShowCart(a)
  }
  return (
    <div className="App ">
      <DataProvider>
        <Header onHandleShowCart={handleShowCart} calledFrom="root"></Header>
        <Store></Store>
        <Footer></Footer>
        <MyPortal>
          {showCart && <Cart onHandleShowCart={handleShowCart}></Cart>}
        </MyPortal>
      </DataProvider>
    </div>
  )
}

export default App
