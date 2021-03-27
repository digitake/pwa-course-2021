import React, { useState, useEffect } from 'react';
import './Chatbox.css';
import App from './App';
import firebase from './firebaseConfig';

import './onClick.js'


const chatroomRef = firebase.database().ref('chatroom-1')


function Chatbox() {

  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect(() => {
    //alert("Total text chat = "+lines.length)
    chatroomRef.on('child_added', snapshot => {
      let x = snapshot.val();
      setLines( l => [...l,{
        sender: x.sender,
        message: x.message,
        timestamp:(new Date())
      }])
    })

  }, []);

  const onChangeHandler = (event) => {
      setText(event.target.value);
  };

  const onSendHandler = () => {
    chatroomRef.push({
      sender: "P",
      message: text,
      timestamp: (new Date)
    })
    
    setText("");
    
  };

  const keyPress = (event) => {
    if(event.which === 13){
      onSendHandler();
    }
  }

  
  return (
    <App>

    <div className="App">    
    <div className="App-chatroom">
        {

          lines.map(x => {
            return <div className="App-chatroom-text">
                <div>
                  
                  {x.timestamp.toLocaleDateString()+" "}
                  {x.sender+": "}
                
                  {x.message+" "}
                  
                  
                  
                </div>
              </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" onChange={onChangeHandler} value={text}/>
        <div className="App-textbox-send" keyPress={onSendHandler} onClick={onSendHandler}>ส่ง!</div>

      </div>
      
    </div>
    </App>

    

  );
}

export default Chatbox;
