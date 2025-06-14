import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'



export const Mynav = () => {
  return (

    <div className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link className='navbar-brand'>Home Shop</Link>
        {/* <a className='navbar-brand' href="/">Home Shop</a> */}
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className='nav-link'>Home</Link>
          </li>
          <li class="nav-item">
            <Link className='nav-link'>
            <FontAwesomeIcon icon={faShoppingCart}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // ...........................................

    // <Navbar expand="lg" className="bg-body-tertiary">
    //     <Container>
    //       <Navbar.Brand href="/">Test App</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link href="/">Home</Nav.Link>
    //           <Nav.Link href="/cart">Cart</Nav.Link>
    //           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //             <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action2">Another Action</NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>

  )
}
