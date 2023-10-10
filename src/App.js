import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header/Header"
import Store from "./components/Store/Store"
import DataProvider from "./components/Context/DataProvider"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App ">
      <DataProvider>
        <Header></Header>
        <Store></Store>
        <Footer></Footer>
      </DataProvider>
    </div>
  )
}

export default App
