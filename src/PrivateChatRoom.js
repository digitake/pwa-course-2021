import React, { useState, useEffect } from 'react';
import './PrivateChatRoom.css';
import Headerchat from './Headerchat';
import { FiPlusCircle,FiSend } from "react-icons/fi";

import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');

function PrivateChatRoom() {

  const [text, setText] = useState("")
  const [lines, setLines] = useState([]);
  
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

const onSend = () => {
  chatroomRef.push({
    sender: "9",
    message: text,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  });

  setText("");
};

const onTextChange = (event) => {
  setText(event.target.value);

};

  return (
      <Headerchat>
    <div className="AppPrivate">

      <div className="App-chatroom">
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
        <button class="btn"><FiPlusCircle/></button>
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} placeholder="Type a message" />
        <button className="App-textbox-send" button onClick={onSend}><FiSend/>Send</button>
      </div>
  </div>

    </Headerchat>
  );
}

export default PrivateChatRoom;
