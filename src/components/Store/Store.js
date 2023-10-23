import React, { useContext } from "react"
import MyContext from "../Context/MyContext"
import { NavLink } from "react-router-dom"
import Headline from "../Header/Headline"

const Store = (props) => {
  const { productsArr, cartItems, addItem } = useContext(MyContext)

  const addToCart = (itemm) => {
    const checkItem = cartItems.find((item) => item.title === itemm.title)
    if (checkItem) {
      alert("The item is already added to the cart")
    } else {
      addItem({ ...itemm, quantity: 1 })
    }
  }

  return (
    <div className=" ">
      <Headline></Headline>
      <h1 className="bg-black font-creepster text-center text-4xl text-white py-4">
        PRODUCTS
      </h1>
      <div className="flex flex-wrap justify-center w-[70%] mx-auto ">
        {productsArr.map((item) => (
          <div
            key={item.title}
            className=" w-2/3 md:w-[40%]    m-1 flex flex-col  items-center  "
          >
            <h1 className=" pt-8 font-bold pb-3">{item.title}</h1>
            <div className=" w-56 rounded-md overflow-hidden ">
              <NavLink to={`/products/${item.title}`}>
                <img
                  src={item.imageUrl[0]}
                  className="w-56 shadow-md  shadow-black drop-shadow-xl transform hover:scale-150 transition-transform duration-1000"
                  alt={item.title}
                  onClick={() => {
                    props.productIDHandler(item.id)
                  }}
                />
              </NavLink>
            </div>
            <div className="flex  w-64 pt-3 justify-between">
              <h1 className=" flex items-center font-semibold  ">
                {"$" + item.price}
              </h1>
              <button
                onClick={() => {
                  addToCart(item)
                }}
                className=" bg-black non p-1 px-3 rounded font-semibold shadow-md shadow-black  drop-shadow-xl text-white "
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
        <div className=" flex justify-center p-5 w-full">
          <button
            onClick={() => {
              props.cartHandler(true)
            }}
            className="  bg-green-500 p-2 px-8 rounded font-semibold shadow-md shadow-black  drop-shadow-xl text-white "
          >
            Go To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Store
