import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



firebase.initializeApp({
	apiKey: "AIzaSyAJDAhgiEm0TRCV1E56WaeQ7CNyhrB7XsY",
	authDomain: "chat-test-668bb.firebaseapp.com",
	projectId: "chat-test-668bb",
	storageBucket: "chat-test-668bb.appspot.com",
	messagingSenderId: "276872211318",
	appId: "1:276872211318:web:fa43a2f07c3bffe5e16857",
	measurementId: "G-5MB6SFP4JD"
}
);

export const Context = createContext(null)


const firestore = firebase.firestore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context.Provider value={{
	firebase,
	firestore
}}>
 <App />
 </Context.Provider>
);


