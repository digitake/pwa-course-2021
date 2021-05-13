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
      <Link className={"Profile-header1"} to="/"/>
      </div>
      
      <div className="Profile-header2" ></div>
      <div className="Profile-header3" ></div>  
        
    </div>
      
      <div className ="Profile-chatroom">
      <div className = "Profile-chatroom1">
      </div>
      <div className = "Profile-chatroom2">
        <div className = "Profile-info-1">Sebrina Vince</div>
        <div className = "Profile-info-2">#designhours</div>
        <div className = "Profile-info-3">@Sebrina</div>
        <div className = "Profile-info-4">Graphic Designer</div>
        <div className = "Profile-info-5">Contact me </div>
        <div className = "Profile-info-6">+65 548869483</div>
        
      </div>
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