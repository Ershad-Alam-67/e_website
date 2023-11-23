import React from "react"
import MyContext from "../Context/MyContext"
import { useEffect, useState, useRef, useContext } from "react"
import Headline from "../Header/Headline"
const LoginPage = () => {
  const { setIsLogIn, setToken } = useContext(MyContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  const fun = () => {
    setSignupPage((prev) => !prev)
  }
  const [signupPage, setSignupPage] = useState(true)
  const handleSubmit = (event) => {
    event.preventDefault()
    const eEmail = emailRef.current.value
    const ePass = passwordRef.current.value
    if (signupPage) {
      console.log("singup")

      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4zb8DwMWplQO7X7-_NuIIBwgAmGGYV3c",
        {
          method: "POST",
          body: JSON.stringify({
            email: eEmail,
            password: ePass,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            return res.json().then((data) => {
              alert(data.error.message)
            })
          }
        })
        .then((data) => {
          setIsLogIn(true)
        })
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4zb8DwMWplQO7X7-_NuIIBwgAmGGYV3c",
        {
          method: "POST",
          body: JSON.stringify({
            email: eEmail,
            password: ePass,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            alert("Login Successful")
            return res.json()
          } else {
            throw new Error("Something went wrong!")
          }
        })
        .then((data) => {
          setToken(data.idToken)
          setIsLogIn(true)
          console.log(data)
        })
        .catch((e) => {
          alert(e)
        })
    }
  }
  return (
    <div>
      <Headline></Headline>
      <div className=" flex justify-center ">
        <div className=" bg-slate-600 w-[35%] rounded-md p-2  ">
          <label htmlFor="email" className=" text-white px-1  ">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            className=" border-none p-1 w-[100%] rounded-md m-1"
          ></input>
          <label htmlFor="email" className=" text-white px-1  ">
            Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            className=" w-[100%] border-[0px] rounded-md p-1 m-1"
          ></input>
          <div className=" flex justify-center">
            <button
              onClick={handleSubmit}
              className=" text-white  font-bold shadow-md  bg-green-500 p-1 px-3 mt-1 rounded "
            >
              {signupPage && "CREATE ACCOUNT"}
              {!signupPage && "LOGIN"}
            </button>
          </div>

          <div className=" flex justify-center">
            <button
              onClick={fun}
              className=" shadow-md mt-2 text-white  underline"
            >
              {!signupPage && "Create new account"}
              {signupPage && "Already have an account!"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
