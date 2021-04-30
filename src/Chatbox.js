import './Chatbox.css';
import {useEffect, useState} from 'react';
import App from './App';

import firebase from './FirebaseConfig';

var chatroomRef;

function Chatbox() {

  const [text, setText] = useState("");

  const [lines, setLines] = useState([]);

  const [name, setName] = useState("MyName")
  
  const [chatroom, setChatroom] = useState("chatroom")

  useEffect(() => {
    setLines(_=>[])
    chatroomRef = firebase.database().ref(chatroom);
    chatroomRef.on('child_added', (snapshot) =>{
      let x = snapshot.val();

      setLines(lines => [...lines, {
        sender: x.sender,
        message: x.message,
        timestamp: new Date(x.timestamp)
      }])
    });

    return () =>{
      chatroomRef.off("child_added")
    };
  }, [chatroom]);
  
  const onRoomChange = (event) => {
    setChatroom(event.target.value);
  }
  
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  
  const onSend = () =>{
    chatroomRef.push({
      sender: name,
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    })
    setText("");
  };
  
  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };
    
  return (

    <App>

      <div className="App col-6">
        <input type="text" className="App-textbox-input" value={chatroom} onChange={onRoomChange}/>
        <input type="text" className="App-textbox-input" value={name} onChange={onNameChange}/>
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
              {x.timestamp.toLocaleTimeString()}
            </div>
            </div>

        })
      }
      </div>

      <div className="App-textbox">

        <input type="text" className="App-textbox-input" 

        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        
        <div className="App-textbox-send" onClick={onSend}>Send!</div>

      </div>

    </div>

    </App>

  );
}

export default Chatbox;




  
