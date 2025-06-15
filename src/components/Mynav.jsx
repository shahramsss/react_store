import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { ShopContext } from '../context/shopContext';

export const Mynav = () => {
  const { cartItems } = useContext(ShopContext)
  const itemCount = cartItems.reduce((prev, value) => {
    return prev + value.count
  }, 0)
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
              {itemCount > 0 && <span className="  badge rounded-pill bg-danger">{itemCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // ...........................................



  )
}
