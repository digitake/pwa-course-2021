import './Chatbox.css';
import {Link} from 'react-router-dom';
import{useState}from 'react';

function Chatbox(){
  return(
    <div className="Chatbox">
      
      <div className="Chatbox-chatroom">
        {
          lines.map(x =>{
        return <div className="Chatbox-chatroom-text">
           {x}
        </div>
          })
        }
      </div>
      <div className="Chatbox-textbox ">
        <input type="text" className="Chatbox-textbox-input" value ={text} onChange= {onTextChange}/>

        <div className="Chatbox-textbox-send " onClick ={onSend}>Send!</div>

      </div>
    </div>
    );
};
export default Chatbox;
