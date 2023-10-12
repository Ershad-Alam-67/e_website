import React from "react"
import Header from "../Header/Header"
import DataProvider from "../Context/DataProvider"
import Footer from "../Footer/Footer"
const randomToursData = [
  {
    date: "JUL 11",
    location: "LOS ANGELES, CA",
    venue: "Hollywood Bowl",
  },
  {
    date: "JUL 15",
    location: "NEW YORK, NY",
    venue: "Madison Square Garden",
  },
  {
    date: "JUL 20",
    location: "CHICAGO, IL",
    venue: "United Center",
  },
  {
    date: "JUL 25",
    location: "SAN FRANCISCO, CA",
    venue: "Chase Center",
  },
]

const Home = () => {
  return (
    <DataProvider>
      <Header></Header>
      <div className="h-[30%] bg-zinc-500">
        <h1 className="text-center w-fit text-white md:text-3xl text-xl ml-20 md:ml-[38%] border-[1px] p-3 border-cyan-400">
          Get Our Latest Album
        </h1>
        <div className="flex justify-center">
          <button className="text-cyan-400 text-2xl border-[2px] border-solid border-cyan-400 m-[20px]  p-4 py-3 rounded-full">
            ►
          </button>
        </div>
      </div>
      <h1 className="text-black font-creepster text-center p-2 pt-8 bg-white text-3xl">
        TOURS
      </h1>

      <div className=" pb-5">
        {randomToursData.map((tour, index) => (
          <div key={index} className="flex justify-center">
            <div className="md:w-[65%] w-[90%] mt-4 flex justify-between px-4 border-b pb-3 border-black">
              <h1 className="p-1 text-sm md:text-base w-[20%]">{tour.date}</h1>
              <h1 className="p-1 text-sm md:text-base w-[30%]">
                {tour.location}
              </h1>
              <h1 className="p-1 text-sm md:text-base w-[40%]">{tour.venue}</h1>
              <div className="flex justify-end p-1 w-[40%]">
                <button className="bg-cyan-400 text-white text-sm md:text-base font-bold md:py-1 rounded-md px-1 py-0 md:px-7">
                  BUY TICKETS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </DataProvider>
  )
}

export default Home
