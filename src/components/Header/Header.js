import React, { useContext } from "react"
import MyContext from "../Context/MyContext"
import { NavLink } from "react-router-dom"

const Header = (props) => {
  const { cartItems } = useContext(MyContext)

  return (
    <div className=" border-0">
      <div className="bg-black z-10 w-full fixed top-0 left-0  text-white border-b-[1px] md:border-b-[2px] flex border-white font-serif">
        <div className="flex justify-end w-[70%] bg-black ">
          <NavLink to="/home" className="p-3 px-4 md:px-14 font-semibold">
            HOME
          </NavLink>
          <NavLink to="/" className="p-3 px-4 md:px-14 font-semibold">
            STORE
          </NavLink>
          <NavLink to="/about" className="p-3 px-4 md:px-14 font-semibold">
            ABOUT
          </NavLink>
        </div>

        {props.calledFrom === "root" && (
          <div className=" flex justify-end bg-black w-[30%] pr-5 items-center">
            <button
              onClick={() => {
                props.onHandleShowCart(true)
              }}
              className="  border-2  px-2 rounded-md border-cyan-500"
            >
              cart
            </button>
            <h1 className=" mb-5 pl-1 text-cyan-500 font-sans text-lg">
              {cartItems.length}
            </h1>
          </div>
        )}
      </div>
      <div className=" bg-zinc-500  border-0   pb-9 md:pb-10 md:text-[6rem] pt-12 font-serif text-white text-[3rem] ">
        <h1 className=" font-semibold text-center p-0">The Generics</h1>
      </div>
    </div>
  )
}

export default Header
