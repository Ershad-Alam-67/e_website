import React, { useState } from "react"
import Header from "../components/Header/Header"
import DataProvider from "../components/Context/DataProvider"
import Footer from "../components/Footer/Footer"
import Headline from "../components/Header/Headline"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const saveData = async (e) => {
    e.preventDefault()

    const data = {
      name: name,
      email: email,
      phone: phone,
    }

    try {
      const response = await fetch(
        "https://react-movies-d5125-default-rtdb.firebaseio.com/user.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        alert("Form Submitted")
        console.log("Data saved successfully!")
      } else {
        console.error("Failed to save data.")
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  return (
    <DataProvider>
      <Headline></Headline>
      <div className="">
        <div className="flex justify-center m-2">
          <form
            onSubmit={saveData}
            className="w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold">
                Name:
              </label>
              <input
                onChange={handleNameChange}
                type="text"
                id="name"
                className="w-full p-2 mt-1 rounded border focus:outline-none focus:ring focus:border-blue-300"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold">
                Email:
              </label>
              <input
                onChange={handleEmailChange}
                type="email"
                id="email"
                className="w-full p-2 mt-1 rounded border focus:outline-none focus:ring focus:border-blue-300"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="pno" className="block text-gray-700 font-bold">
                Phone No.:
              </label>
              <input
                onChange={handlePhoneChange}
                type="tel"
                id="pno"
                className="w-full p-2 mt-1 rounded border focus:outline-none focus:ring focus:border-blue-300"
                placeholder="123-456-7890"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </DataProvider>
  )
}

export default Contact
