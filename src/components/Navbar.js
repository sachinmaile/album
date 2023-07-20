// import React from 'react';
// import { Link } from 'react-router-dom'

// //get button name and path for evaery component
// const Navbar = (props) => {

//   return (
//     <div className='navbar'>
//       <h2 onClick={() => props.handleClick(false)}>
//         <span className='brand-first-half'>ALBUMS</span>
//         <span className='brand-last-half'>LIST</span>
//       </h2>
//       <Link to={props.path}><button>{props.page}</button></Link>
//     </div>
//   )
// }

// export default Navbar

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMenu = (props)=>{
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Album</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={props.path}>Add Album</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu; 
