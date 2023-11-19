import "./navbar.css"
import mvwLogo from "../../assets/mobile-logo.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
      <img src={mvwLogo} alt="Logo" className="logo" />
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar