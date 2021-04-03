import React, { useState, useEffect } from 'react';
import './Chatbox.css';
import Headerchat from './Headerchat';

import firebase from './firebaseConfig'; //ดึง config

const chatroomRef = firebase.database().ref('chatroom-1');

function Chatbox() {

  const [text, setText] = useState("")
  const [lines, setLines] = useState([]);

// () => {} same as function() {}
  
useEffect(() => {
    chatroomRef.on('child_added', snapshot => {
      let x = snapshot.val();
      setLines(l => [...l, {
        sender: x.sender, 
        message : x.message,
        timestamp: (new Date(x.timestamp))
      }])
    })
  }, []);
  //watchdog

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
   // Push message to firebase server
   chatroomRef.push({
     sender : "Me",
     messsage : text,
     timestamp: firebase.database.ServerValue.TIMESTAMP
   })
    
   setText("");
  };

  return (
    <Headerchat>
    <div className="App">
      <div className="App-content">
      {
        lines.map(x =>{
          return <div className="App-chatroom-text">
            <div>
              {x.sender+":"},
              {x.message},
              {x.timestamp.toLocaleDateString()}
              </div>
          </div>
        }) 
      }
      </div>
      <div className="App-textbox">
        <button class="btn"><i>More Function</i></button>
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} placeholder="Type a message" />
        <div className="App-textbox-send" onClick={onSend}>Send </div>
      </div>
    </div>
    </Headerchat>
  );
}

export default Chatbox;
