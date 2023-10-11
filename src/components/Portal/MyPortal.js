import ReactDOM from "react-dom"

const MyPortal = ({ children }) => {
  const pRoot = document.getElementById("portal-root")
  return ReactDOM.createPortal(children, pRoot)
}
export default MyPortal
