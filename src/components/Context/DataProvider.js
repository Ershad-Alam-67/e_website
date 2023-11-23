import React, { useState, useEffect } from "react"
import MyContext from "./MyContext"

const DataProvider = (props) => {
  const storedInfo = JSON.parse(localStorage.getItem("user")) || ""
  const [cartItems, setCartItems] = useState([])
  const [isLogIn, setIsLogIn] = useState(storedInfo.isLogIn || false)
  const [token, setToken] = useState(storedInfo.token || "")

  const addItem = (item) => {
    setCartItems((pre) => {
      return [...pre, item]
    })
  }
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify({ isLogIn, token }))
  }, [isLogIn, token])
  console.log(isLogIn)
  const productsArr = [
    {
      id: "p1",
      title: "White Sneaker",

      price: 100,

      imageUrl: [
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/3/w/6-algo8016-abros-white-beige-original-imagp9wqfwpzwnha.jpeg?q=70",

        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/u/j/6-algo8016-abros-white-beige-original-imagp9wqyqsh8uar.jpeg?q=70",

        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/e/i/6-algo8016-abros-white-beige-original-imagp9wqz5c6evhq.jpeg?q=70",

        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/j/w/g/6-algo8016-abros-white-beige-original-imagp9wqgpheh7kv.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/m/x/6/6-algo8016-abros-white-beige-original-imagp9wqgcg5mygq.jpeg?q=70",
      ],
    },

    {
      id: "p2",
      title: "iphone",

      price: 50,

      imageUrl: [
        "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",

        "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/a/b/f/iphone-13-mlpf3hn-a-apple-original-imag6vzzdn9cwhs5.jpeg?q=70",

        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/e/g/-original-imagh7g8k7ttcdkc.jpeg?q=70",
      ],
    },

    {
      id: "p3",
      title: "Book",

      price: 70,

      imageUrl: [
        "https://rukminim2.flixcart.com/image/416/416/klmmrgw0/regionalbooks/f/3/g/the-power-of-your-subconscious-mind-original-imagypuj7qxyepyq.jpeg?q=70",

        "https://rukminim2.flixcart.com/image/416/416/knj7wcw0/book/w/x/x/the-power-of-your-subconscious-mind-original-imag26xben48vt7z.jpeg?q=70",

        "https://rukminim2.flixcart.com/image/416/416/k1nw9zk0/book/9/1/7/the-power-of-your-subconscious-mind-original-imafh635mrbfudhn.jpeg?q=70",
      ],
    },

    {
      id: "p4",
      title: "Gray Pant",

      price: 100,

      imageUrl: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/cargo/l/v/x/28-baggy-jeans-styzon-original-imagraan76fpqtgg.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/cargo/v/n/h/28-baggy-jeans-styzon-original-imagraany35hhhzr.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/cargo/k/w/l/28-baggy-jeans-styzon-original-imagraand3k8zaqg.jpeg?q=70",
      ],
    },
  ]

  return (
    <MyContext.Provider
      value={{
        productsArr,
        cartItems,
        addItem,
        setCartItems,
        setIsLogIn,
        setToken,
        isLogIn,
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export default DataProvider
