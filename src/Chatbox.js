import './Chatbox.css';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {useState, useEffect } from 'react';
=======
import {useState, useEffect} from 'react';
>>>>>>> 5a5c7bd7829e358da49de8bd8efe51769efdf865
=======
import { useState, useEffect } from 'react';
>>>>>>> 0afc5c99e8a7f3b4da440620756989bc8266d703
import App from './App';
import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');

import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');

function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    chatroomRef.on('child_added', snapshot => {
      let x = snapshot.val();
      setLines( l => [...l, {
        sender: x.sender, 
        message: x.message,
        timestamp: (new Date(x.timestamp))
      }])
    })

  }, []);
  
=======
>>>>>>> 0afc5c99e8a7f3b4da440620756989bc8266d703
  useEffect(() => {
    chatroomRef.on('child_added', snapshot => {
      let x = snapshot.val();
      setLines(l => [...l, {
        sender: x.sender,
        message: x.message,
        timestamp: (new Date(x.timestamp))
      }])
    })

  }, []);

=======
import {useState} from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
>>>>>>> ArunsawadBoonthus-main
  const onTextChange = (event) => {
    setText(event.target.value);
  };

<<<<<<< HEAD
  const onSend = () =>{
<<<<<<< HEAD
<<<<<<< HEAD
    //Push message
    chatroomRef.push({
      sender: "Me", 
=======
    chatroomRef.push({
      sender: "Me",
>>>>>>> 5a5c7bd7829e358da49de8bd8efe51769efdf865
=======
  const onSend = () => {
    chatroomRef.push({
      sender: "Dtawan",
>>>>>>> 0afc5c99e8a7f3b4da440620756989bc8266d703
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    })
=======
    setLines([...lines, text]);
>>>>>>> ArunsawadBoonthus-main
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13) {
      onSend();
    }
<<<<<<< HEAD
  };

  return (
    <App>
<<<<<<< HEAD
        <div className="App">
            <div className="App-chatroom">
                {
                lines.map(x => {
                    return <div className="App-chatroom-text">
                            <div>
                              {x.sender+":"}
                            </div>
                            <div>
                              {x.message}
                            </div>
                            <div>
<<<<<<< HEAD
                              {x.timestamp.toLocaleDateString()}
=======
                              {x.timestamp.toLocaleString()}
>>>>>>> 5a5c7bd7829e358da49de8bd8efe51769efdf865
                            </div>
                        </div>
                })
                }
            </div>
            <div className="App-textbox-chatbox-icon" >
            <i class="fas fa-microphone-alt"></i> 
            <i class="fas fa-file-upload hide-when-small"></i>
            <i class="fas fa-plus hide-when-big"></i>
            <i class="fas fa-images hide-when-small"></i> 
            <i class="fas fa-camera"></i> 
            </div>
=======
      <div className="App">
        <div className="App-chatroom">
          {
            lines.map(x => {
              return <div className="App-chatroom-text">
                <div>
                  {x.sender + ":"}
                </div>
                <div>
                  {x.message}
                </div>
                <div>
                  {x.timestamp.toLocaleString()}
                </div>
              </div>
            })
          }
        </div>
        <div className="App-textbox-chatbox-icon" >
          <i class="fas fa-microphone-alt"></i>
          <i class="fas fa-file-upload"></i>
          <i class="fas fa-images"></i>
          <i class="fas fa-camera"></i>
        </div>
>>>>>>> 0afc5c99e8a7f3b4da440620756989bc8266d703

        <div className="App-textbox">
          <input type="text" className="App-textbox-input"
            value={text} onChange={onTextChange} onKeyPress={keyPress} />
          <div className="App-textbox-send" onClick={onSend}> <i class="far fa-paper-plane"></i> </div>
        </div>
      </div>
    </App>
  );
}

export default Chatbox;
=======

  };

  return (
    <div className="App">
      
      <div className="App-chatroom">
        {
          lines.map(x => {
            return <div className="App-chatroom-text">
                    {x}
                   </div>
          })
        }
      </div>
      <div className="App-textbox-icon" ><i class="fas fa-microphone-alt"></i> 
      <i class="fas fa-file-upload hide-when-small"></i>
      <i class="fas fa-plus hide-when-big"></i>
      <i class="fas fa-images hide-when-small"></i> 
      <i class="fas fa-camera"></i> </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}> <i class="far fa-paper-plane"></i> </div>
      </div>
    </div>
  );
}

export default App;
>>>>>>> ArunsawadBoonthus-main
