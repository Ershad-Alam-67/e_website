import React from "react"

const Header = () => {
  return (
    <div>
      <div className="bg-black z-10 w-full fixed top-0 left-0  text-white border-b-[1px] md:border-b-[2px] flex border-white font-serif">
        <div className="flex justify-end w-[70%] bg-black ">
          <button className="p-3 px-4 md:px-14 font-semibold">HOME</button>
          <button className="p-3 px-4 md:px-14 font-semibold">STORE</button>
          <button className="p-3 px-4 md:px-14 font-semibold">ABOUT</button>
        </div>
        <div className=" flex justify-end bg-black w-[30%] pr-5 items-center">
          <button className="  border-2  px-2 rounded-md border-cyan-500">
            cart
          </button>
          <h1 className=" mb-5 pl-1 text-cyan-500 font-sans text-lg">0</h1>
        </div>
      </div>
      <div className=" bg-zinc-500    pb-9 md:pb-10 md:text-[6rem] pt-12 font-serif text-white text-[3rem] ">
        <h1 className=" font-semibold text-center p-0">The Generics</h1>
      </div>
    </div>
  )
}

export default Header