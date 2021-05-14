import './App.css';
import {useState,useEffect} from 'react';
import{Link} from 'react-router-dom';
import App from './App';
import firebase from './firebaseConfig';
import LogoApp from './LogoApp.png';
import HomeIcon from './HomeIcon.png';
const chatroomRef=firebase.database().ref('chatroom')

function Chatbox() {
 

 
//render

  return (
      
        <div className="App">


<div className="App-header-home">

           
            <div className="App-pic-home" > 
               <Link to="/home" >
               <img src={HomeIcon}/>
               </Link> 
               
                <Link to="/home" >
               
               </Link>  
               <div className="App-text-left">
                Go to home
                        
            </div>
            
            </div>
               
</div>

</div>

   
   
  );
}

export default Chatbox;
