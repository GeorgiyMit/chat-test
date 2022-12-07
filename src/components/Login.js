import { Button } from "react-bootstrap";
import React, { useState} from "react";
import Container from "react-bootstrap/esm/Container";
import{Row,Col,Card,} from "react-bootstrap"



const Login = ({onChange,text,onClick,}) =>{


	const status = function(){
		onClick(current=>!current)
}


const textChange =(e)=>{
	onChange(e.target.value)
}

	return(
		
		<Container>

		<Row>
		  <Col>
  
			<Card className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '20px', maxWidth: '400px'}}>
			  <div className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
  
				<h2 className="text-uppercase">Login</h2>
				<p className="text-white-50 mb-5">Please enter your Login:{text}</p>
  
				<input 
				className='mb-4'  type='text' size="lg"
				
				onChange ={textChange}
				/>
				<Button onClick={status}
					 variant="outline-light" size='lg'>
				  Login
				</Button>
  
				<div>
  
				</div>
			  </div>
			</Card>
  
		  </Col>
		</Row>
  
	  </Container>
	 

	)
}
export default Login;
