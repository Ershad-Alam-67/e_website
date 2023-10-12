import React from "react"
import { useContext, useState, useEffect } from "react"
import MyContext from "../Context/MyContext"
import pic from "../assets/pic.png"

const Cart = (props) => {
  const [total, setTotal] = useState(0)
  const { cartItems } = useContext(MyContext)
  useEffect(() => {
    let tot = 0
    cartItems.forEach((element) => {
      tot = tot + parseInt(element.price) * parseInt(element.quantity)
    })
    setTotal(tot)
  }, [cartItems])
  return (
    <div className="top-16 overflow-y-scroll max-h-[85%]  fixed w-full md:w-[38%] bg-white pb-4  right-0">
      <div className=" flex h-max  w-full justify-between items-start">
        <h1 className="pt-8 font-creepster text-3xl pl-[43%] ">CART</h1>
        <div className="pr-4">
          <button
            onClick={() => {
              props.onHandleShowCart(false)
            }}
            className=" border-[2px] mt-1 px-2 rounded-lg text-gray-500 font-bold text-xl"
          >
            X
          </button>
        </div>
      </div>
      <div className=" flex justify-around pt-3">
        <h1 className=" border-b font-serif p-1 pb-3 w-[35%] font-bold text-lg    px-4  border-black">
          ITEM
        </h1>
        <h1 className=" border-b p-1 pb-3 font-serif font-bold text-lg px-4  border-black">
          PRICE
        </h1>
        <h1 className=" border-b p-1 pb-3 font-serif w-[30%] font-bold text-lg  px-4  border-black">
          QUANTITY
        </h1>
      </div>
      <div className=" ">
        {cartItems.map((item) => (
          <div className=" flex  justify-around ">
            <div className=" border-b-[1px] border-black pb-2 ml-[2%]   w-[35%] flex flex-wrap  px-4 p-1 pt-3">
              <img src={item.imageUrl} className=" w-[50%] h-16 rounded-md" />
              <h1 className="pl-2 overflow-ellipsis w-[50%] break-words">
                {item.title}
              </h1>
            </div>
            <div className="pl-3 border-b-[1px] md:w-[20%] border-black md:ml-[6px]  pr-2 ml-[13px]  w-[24%] flex flex-wrap items-center pt-3">
              <h1 className="ml-2 p-2 px-3 ">{item.price}</h1>
            </div>
            <div className=" border-b-[1px] border-black  w-[32%] md:w-[30%] ml-[5%] md:ml-2 flex items-center justify-between">
              <h1 className="  px-2 py-1 border border-black ">
                {item.quantity}
              </h1>
              <button className=" bg-black text-white text-sm rounded shadow-xl mr-1 px-3 py-1  ">
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1 className=" text-end mr-7 font-bold text-lg">Total: {total}</h1>

      <button className=" text-center ml-[38%] mt-2 px-3 rounded font-bold text-xl py-1  bg-green-500">
        Purchase
      </button>
    </div>
  )
}

export default Cart
