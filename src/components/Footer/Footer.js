import React from "react"
import Yt from "./yt.png"
import Spt from "./spt.png"
import Fb from "./fb.png"
const Footer = () => {
  return (
    <div className=" flex">
      <div className=" bg-black text-white h-20 flex justify-center items-center w-[50%]">
        <h1 className=" text-4xl font-creepster">The Generics</h1>
      </div>
      <div className=" bg-black text-white h-20 flex justify-center items-center w-[50%]">
        <img src={Yt} className="  mx-3 w-8 h-8" />
        <img src={Spt} className=" w-8 mx-3 h-8" />
        <img src={Fb} className=" w-8 mx-3 h-8" />
      </div>
    </div>
  )
}

export default Footer
