import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Profile.css';
import App from './App';


function Profile(){

  return (
    <App>
    <div className="Profile">
      
      <div className="Profile-header">

      <div className="Profile-header1" >
      <Link className={"Profile-header1"} to="/home"/>
      </div>
      
      <div className="Profile-header2" ></div>
      <div className="Profile-header3" ></div>  
        
    </div>
      
      <div className ="Profile-chatroom">
      <div className = "Profile-chatroom1"></div>
      <div className = "Profile-chatroom2"></div>
      </div>
      
  
      <div className="Profile-textbox">
        

        <div className="Profile-textbox-send" >
        <Link className={"Profile-textbox-send"} to="/chats"/>
        </div>
        <div className="Profile-textbox-send1" > </div>
        <div className="Profile-textbox-send2" ></div>
        <div className="Profile-textbox-send3" ></div>
        <div className="Profile-textbox-send4" ></div>
        

      </div>
    </div>
    </App>
  );
  
}


export default Profile;