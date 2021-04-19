import './navbar.css'

const Navbar = () => {
  return (
    <ul>
      <li> <a href="/auth/login">Login</a> </li>
      <li><a href="/auth/logout">Logout</a></li>
    </ul>
  )
}

export default Navbar;