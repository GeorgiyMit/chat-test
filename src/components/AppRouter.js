import React from "react";
import {Navigate,Route,Routes} from  'react-router-dom'
import Chat from "./Chat";

import Login from "./Login";


const AppRouter = ({onChange,text,onClick,user}) =>{
	
	
const textChange = (text) =>{
	 onChange(text)
	 }


	  
 const status = function(user){
 onClick(user)}

return (
	<Routes>
 <Route  path="/" element={user ? <Navigate to="/chat"/> : <Navigate to="/login"/>} />
<Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login onClick={status} onChange={textChange} text={text}/> }  />
<Route path = "/chat" element={user ? <Chat text={text}/> :  <Navigate to="/login" />} />
<Route  path="*" element={<Navigate to="/"/>} />
	</Routes>
	
)
}
export default AppRouter;
