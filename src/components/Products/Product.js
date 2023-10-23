import React, { useContext, useEffect, useState } from "react"
import MyContext from "../Context/MyContext"

const Product = (props) => {
  const { productsArr } = useContext(MyContext)
  const product = productsArr.find((item) => item.id === props.productID)
  const [frontImage, setFrontImage] = useState(product.imageUrl[0])
  const [loadedReviews, setLoadedReviews] = useState([])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [review, setReview] = useState("")
  const submitReview = async () => {
    const obj = {
      productID: product.id,
      user: "User",
      review: review,
    }
    const res = await fetch(
      "https://ecommerce-website-be0d4-default-rtdb.firebaseio.com/reviews.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-website-be0d4-default-rtdb.firebaseio.com/reviews.json"
        )
        if (response.ok) {
          const data = await response.json()
          const temploadedReviews = []
          for (const key in data) {
            temploadedReviews.push({
              user: data[key].user,
              productID: data[key].productID,
              review: data[key].review,
            })
          }

          setLoadedReviews(temploadedReviews)
        } else {
          throw new Error(`Request failed with status: ${response.status}`)
        }
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchData()
  }, [review, loadedReviews])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const desktopBreakpoint = 768

  const renderContent = () => {
    if (windowWidth < desktopBreakpoint) {
      return (
        <div className=" mt-16 p-6 ">
          <div className=" flex h-[350px] justify-center">
            <img src={frontImage} className=" rounded-md" alt={product.title} />
          </div>
          <div className="flex justify-center">
            <h1 className="mt-2 ">{product.title}</h1>
          </div>
          <div className=" p-1">
            <div className="flex-wrap p-5 flex justify-center">
              {product.imageUrl.map((item) => (
                <div className="w-[45%]   flex justify-center">
                  <img
                    onClick={() => {
                      setFrontImage(item)
                    }}
                    src={item}
                    className=" w-20 py-2"
                    alt={product.title}
                  ></img>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex justify-center mt-4 ">
            <div className=" p-4 w-[70%] border rounded-md  bg-gray-200 ">
              <label className=" mb-3 font-bold">Review This Product</label>
              <textarea
                onChange={(e) => {
                  setReview(e.target.value)
                }}
                type="text"
                id="name"
                className="w-full  p-2 mt-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
                placeholder="John Doe"
              />
              <div className="flex justify-end w-[100%] ">
                <button
                  onClick={() => {
                    submitReview()
                  }}
                  className=" bg-green-700 mt-2 rounded p-2 px-3 text-white font-bold"
                >
                  Submit Review
                </button>
              </div>
              {loadedReviews
                .filter((item) => item.productID === product.id)
                .map((item) => (
                  <div className=" mt-2 flex justify-between rounded-md border border-1 border-gray-700">
                    <h1 className=" p-2">{item.user}</h1>
                    <h1 className="p-2">{item.review}</h1>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="desktop-interface  mt-16 p-6">
          <div className="flex  h-[300px] justify-center">
            <img
              src={frontImage}
              className="  rounded-md"
              alt={product.title}
            />
          </div>
          <div className="flex justify-center  mt-4">
            <div className=" flex justify-between w-[20%] ">
              <h1 className=" font-bold">{product.title}</h1>
              <h1 className=" font-bold">{`$${product.price}`}</h1>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {product.imageUrl.map((item, index) => (
              <img
                key={index}
                onClick={() => {
                  setFrontImage(item)
                }}
                src={item}
                className="w-16 mx-2 cursor-pointer"
                alt={`Image ${index + 1}`}
              ></img>
            ))}
          </div>
          <div className=" flex justify-center mt-4 ">
            <div className=" p-4 w-[70%] border rounded-md  bg-gray-200 ">
              <label className=" mb-3 font-bold">Review This Product</label>
              <textarea
                onChange={(e) => {
                  setReview(e.target.value)
                }}
                type="text"
                id="name"
                className="w-full  p-2 mt-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
                placeholder="John Doe"
              />
              <div className="flex justify-end w-[100%] ">
                <button
                  onClick={() => {
                    submitReview()
                  }}
                  className=" bg-green-700 mt-2 rounded p-2 px-3 text-white font-bold"
                >
                  Submit Review
                </button>
              </div>
              {loadedReviews
                .filter((item) => item.productID === product.id)
                .map((item) => (
                  <div className=" mt-2 flex justify-between rounded-md border border-1 border-gray-700">
                    <h1 className=" p-2">{item.user}</h1>
                    <h1 className="p-2">{item.review}</h1>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )
    }
  }

  return <div className="product-container">{renderContent()}</div>
}

export default Product
