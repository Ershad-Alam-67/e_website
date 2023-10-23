import React, { useContext } from "react"
import MyContext from "../Context/MyContext"
import { NavLink } from "react-router-dom"

const Header = (props) => {
  const { cartItems } = useContext(MyContext)

  return (
    <div className="  border-0">
      <div className="bg-black z-10 w-full fixed top-0 left-0  text-white border-b-[1px] md:border-b-[2px] flex border-white font-serif">
        <div className="flex justify-end w-[80%] bg-black">
          <NavLink
            activeClassName=" underline"
            to="/home"
            className="p-3 text-sm px-2 md:text-base  md:px-14 font-semibold"
          >
            HOME
          </NavLink>
          <NavLink
            to="/"
            exact
            activeClassName="underline"
            className="p-3 text-sm px-2 md:text-base   md:px-14 font-semibold"
          >
            STORE
          </NavLink>
          <NavLink
            activeClassName=" underline"
            to="/about"
            className="p-3 px-2 text-sm md:text-base  md:px-14 font-semibold"
          >
            ABOUT
          </NavLink>
          <NavLink
            activeClassName=" underline"
            exact
            to="/contact"
            className="p-3 text-sm px-2  md:text-base md:px-14 font-semibold"
          >
            CONTACT
          </NavLink>
        </div>

        <div className=" flex justify-center bg-black w-[20%] pr-1 items-center">
          <button
            onClick={() => {
              props.cartHandler(true)
            }}
            className=" border-2 ml-2 px-2  rounded-md border-cyan-500"
          >
            cart
          </button>
          <h1 className=" mb-5 pl-1 text-cyan-500 font-sans text-lg">
            {cartItems.length}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
