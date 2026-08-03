import { Link } from "react-router-dom"
function NotFound() {
  return (
    <div>
      <h1>Page not found</h1><br />
      <div>
        <Link to={"/"} className="button">Click here</Link>
        <span> to return to the home page</span>
      </div>
    </div>
  )
}

export default NotFound
