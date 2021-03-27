import React, { useState } from 'react';
import './Chatbox.css';
import App from './App';

import firebase from './firebaseConfig';

const chatroomref = firebase.database().ref('chatroom-1');

function Chatbox() {

  const [text, setText] = useState("")
  const [lines, setLines] = useState([]);

  useEffect (() => {
      chatroomRef.on('child_added', snapshot => {
        let x = snapshot.val();
        setLines ( l => [...l, {
          sender: x.sender,
          message: x.message,
          timestamp: (new Date())
        }])
      });
  }, []);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    chatroomRef.push({
      sender: "Me",
      message: text,
    })
  };


  return (
      <App>
    <div className="App">
      <div className="App-content">
      {
        lines.map(x =>{
          return <div className="App-chatroom-text">
                  {x}
                  </div>
        }) 
      }
      </div>
      <div className="App-textbox">
        <button class="btn"><i>More Function</i></button>
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} placeholder="Type a message" />
        <button className="App-textbox-send" button onClick={onSend}>Send</button>
      </div>
    </div>
    </App>
  );
}

export default Chatbox;
