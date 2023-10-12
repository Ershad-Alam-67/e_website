import React, { useState } from "react"
import MyContext from "./MyContext"
const DataProvider = (props) => {
  const [cartItems, setCartItems] = useState([])

  const addItem = (item) => {
    setCartItems((pre) => {
      return [...pre, item]
    })
  }

  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ]

  return (
    <MyContext.Provider value={{ productsArr, cartItems, addItem }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default DataProvider
