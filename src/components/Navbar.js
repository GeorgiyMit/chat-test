import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import  Button  from 'react-bootstrap/Button';
import AppRouter from './AppRouter';
import App from '../App';



const NavBar = ({text,user,onClick}) =>{
	
	const status = function(user){
		onClick(!user)}
	   
	

  return (
	<Navbar expand="lg" variant="dark" bg="dark">
	<Container>
	<Navbar.Brand href="#"></Navbar.Brand>
	  <Nav className="me-auto ">
        {user ? 
		 <Button variant="dark" onClick={status}>Exit</Button>
		 :  
		<Nav.Link  href="/login">Login</Nav.Link>
		}
          </Nav> 
        {user  ?
		 <Navbar.Text>
            Signed in as: <a href="#">{text}</a>
          </Navbar.Text>
		  :
		  <Navbar.Text>
            Signed in as: <a href="#">Unknow</a>
          </Navbar.Text>
          }
        
		
	</Container>
  </Navbar>
	  );
	}
	
		
export default NavBar;