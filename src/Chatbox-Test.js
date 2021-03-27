import './Chatbox.css';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> e68f13f2c2fa4ae4df83fe29c8ef748d600d0ffe
import App from './App'

import firebase from './firebaseConfig';

<<<<<<< HEAD
const chatroomref = firebase.database().ref('chatroom-1')
=======
const chatroomRef = firebase.database().ref('chatroom-1');
>>>>>>> e68f13f2c2fa4ae4df83fe29c8ef748d600d0ffe

function Chatbox() {

    const [text, setText] = useState("");
    const [lines, setLines] = useState([]);

    useEffect( () => {
      chatroomref.on('child_added',snapshot =>{
        let x = snapshot.val();
        setLines(l => [...l,{
          Sender:"Me",
          Message: tex
        }])
      });


    }, []);
  
    useEffect(() => {
      chatroomRef.on('child-added', snapshot => {
        let x = snapshot.val();
        setLines( l => [ ...l,{
          sender: x.sender,
          message: x.message,
          timestamp: (new Date())
        }])
      });

    }, []);

    const onTextChange = (event) =>{
      setText(event.target.value)
    };
  
    const keyPress = (event) => {
      if (event.which === 13){
        onSend();
      }
    };
  
<<<<<<< HEAD
  const onSend = () => {
    chatroomref.push({
      Sender: "Me",
      Message: text
    });
    
    setText("");
  }
=======
    const onSend = () => {
      chatroomRef.push({
        sender : "Me",
        message: text,
        timestamp: firebase.database.ServerValue.timestamp
      });
      setText("");
    };
>>>>>>> e68f13f2c2fa4ae4df83fe29c8ef748d600d0ffe

  return (
    <App>
            <div className = "App-chatroom">
                {
                lines.map(x => {
                return <div className="App-chatroom-text">
<<<<<<< HEAD
                       <div>
                         {x.Sender+": "}
                       </div>
                       <div>
                        {x.Message}
                       </div>
=======
                  <div>
                    {x.sender+ " : "}
                  </div>
                  <div>
                    {x.message}
                  </div>
                  <div>
                    {x.timestamp.toLocaleDateString()}
                  </div>
>>>>>>> e68f13f2c2fa4ae4df83fe29c8ef748d600d0ffe
                  </div>
                })
                }
            </div>

            <div className="App-textbox">
            <input type="text" className="App-textbox-input" 
            value={text} onChange={onTextChange} onKeyPress={keyPress}/>

            <div className="App-textbox-send" onClick={onSend}>Send!</div>

            </div>
        
    </App>
  );
}
export default Chatbox;