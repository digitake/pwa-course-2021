import { Link } from 'react-router-dom'
import backButton from './back_button.png'
import friendlistButton from './friendList_button.png'
import React, { useState } from 'react';
import './Chatroom.css'

function Chatroom() {
    const [text, setText] = useState("");
    const [lines, setLines] = useState([""]);
  
    const onChangeHandler = (event) => {
        setText(event.target.value);
    };
  
    const onSendHandler = (event) => {
      setLines(lines => [...lines, text]);
      setText("");
    };



    return (
    
        <div className="Chatroom">
           <div class="Chatroom-header">

               <Link to="/">
                    <img src={backButton}></img>
                  </Link>
                <Link to="/friend-list">
                  <img src={friendlistButton}></img>
                  </Link>
                

            </div>      
                 

       <div class="Chatroom-center">
            
                </div>  

        <div className="Chatroom-room">
        {

          lines.map((value, index) => {
            return <div key={index} className="Chatroom-room-text">
                {value}
              </div>
          })
        }
      </div>
      <div className="Chatroom-textbox">
        <input type="text" className="Chatroom-textbox-input" onChange={onChangeHandler} value={text}/>
        <div className="Chatroom-textbox-send" onClick={onSendHandler}>ส่ง!</div>

      </div>
</div>
        )

    }
    
export default Chatroom;