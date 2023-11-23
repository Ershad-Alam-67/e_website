import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import Header from "./components/Header/Header"
import Store from "./components/Store/Store"
import DataProvider from "./components/Context/DataProvider"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Home from "./components/Home/Home"
import Contact from "./pages/Contact"
import MyPortal from "./components/Portal/MyPortal"
import Cart from "./components/Cart/Cart"
import Product from "./components/Products/Product"
import LoginPage from "./components/Login/LoginPage"

function App() {
  const [productID, setProductID] = useState("ini")
  const productIDHandler = (id) => {
    setProductID(id)
  }
  const [showCart, setShowCart] = useState(false)
  const handleShowCart = (a) => {
    setShowCart(a)
  }
  return (
    <div className="App ">
      <DataProvider>
        <Header cartHandler={handleShowCart} />
        <MyPortal>
          {showCart && <Cart cartHandler={handleShowCart}></Cart>}
        </MyPortal>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Store
              productIDHandler={productIDHandler}
              cartHandler={handleShowCart}
            />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/products">
            <Product
              productIDHandler={productIDHandler}
              productID={productID}
            ></Product>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
        <Footer />
      </DataProvider>
    </div>
  )
}

export default App
