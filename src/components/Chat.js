import React, { useContext, useState } from "react";
import { Col, Container,Row } from "react-bootstrap";
import {useCollectionData} from "react-firebase-hooks/firestore"
import { Context } from "../index";
import firebase from "firebase/compat/app"

const Chat = ({text}) =>{
	
 const {firestore} = useContext(Context)
	const [value,setValue] = useState()
	var [messages] = useCollectionData(
		firestore.collection('messages').orderBy('createdAt')
	)


   const sendMessage = async () => {
	firestore.collection('messages').add({
    
	displayName:text,
			
	msgText:value,
    createdAt:firebase.firestore.FieldValue.serverTimestamp()
	}
	)
	setValue('')
   }


	return(
		<Container>
			<Row className="justify-content-center h-100">
            <Col className="chat align-items-center col-md-12 col-lg-10 col-xl-8 my-5">
				<div className="card card_chat ">
				<div className="card-header msg_head">
<div className="d-flex bd-highlight">
	<div className="img_cont">
     <img src=""/>
<span className="online_icon"></span>
	</div>
	<div className="user_info">
		<span>Chat</span>
		
	</div>

</div>
				</div>

<div className="card-body msg_card_body">
	{messages && messages.map( (message,id) => 
	text === message.displayName ?
			<div key={id} className="d-flex justify-content-start mb-4 msg_wrap">
			<div className="img_cont_msg">
				<img className="rounded-circle user_img_msg"/>
			</div>
			<div className="msg_container">
			<div className="user_name">{message.displayName}</div>
			{message.msgText}
				<span className="msg_time"></span>
			</div>
		</div>
	:
        <div key={id} className="d-flex justify-content-end mb-4 ">
		
		<div className="msg_container_send ">
		<div className="user_name send_name">{message.displayName}</div>
		{message.msgText}
			<span className="msg_time_send"></span>
		</div>
		<div className="img_cont_msg">
			<img  className=" user_img_msg"/>
		</div>
	</div>
		)}


	
	
</div>
<div className="card-footer">
	<div className="input-group">

	<textarea  className="form-control type_msg" placeholder="Type your message..."
	value={value}
	onChange={e=>setValue(e.target.value)}
	></textarea>
	<div className="input-group-append">
									<button className="send_btn" onClick={sendMessage}>отправить</button>
								</div>

	</div>
</div>
</div>
             </Col>
            </Row>
		</Container>
	)
}
export default Chat;