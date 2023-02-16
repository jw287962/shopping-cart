import { Link } from "react-router-dom"
import './css/nav.css'


export const Nav = () => {

  return (
    <nav>
        <div>WebsiteName</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="./Shop">Shop</Link>
      </div>

    </nav>
  )
}