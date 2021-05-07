import React, { useState, useEffect } from 'react';
import './Chatbox.css';
import Headerchat from './Headerchat';

import firebase from './firebaseConfig'; //ดึง config

const chatroomRef = firebase.database().ref('chatroom-1');

function Chatbox() {

  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  const [name, setName] = useState("myname");

  useEffect (() => {
      chatroomRef.on('child_added', snapshot => {
        let x = snapshot.val();
        setLines ( l => [...l, {
          sender: x.sender,
          message: x.message,
          timestamp: (new Date(x.timestamp))
        }])
      });
  }, []);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onSend = () => {
    chatroomRef.push({
      sender: name,
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    })
  };

  const keyPress = (event) => {
    if (event.which == 13) {
    }
  };


  return (
    <Headerchat>
    <div className="App">
      <input type="text" value={name} onChange={onNameChange}/>
      <div className="App-content">
      {
        lines.map(x =>{
          return <div className="App-chatroom-text">
            <div>
            {x.sender + " : " + x.message + " " + x.timestamp.toLocaleString()}
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
