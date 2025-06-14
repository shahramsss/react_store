import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



export const Mynav = () => {
  return (

    <div className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>Home Shop</Link>
        {/* <a className='navbar-brand' href="/">Home Shop</a> */}
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to='/' className='nav-link' >Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/cart' className='nav-link'>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // ...........................................

 

  )
}
