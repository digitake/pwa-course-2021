import './Chatbox.css';
import { useState, useEffect } from 'react';
import App from './App';

import firebase from './firebaseConfig'

const chatroomRef = firebase.database().ref('chatroom-1');

function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  

  useEffect(() => {
    //Load only firsttime
    chatroomRef.once('value', (snapshot) => {
      
      let items = snapshot.val();
      for (let key in items) {
        let x = items[key];
        setLines(l => [
          ...l,
          {
            sender: x.sender,
            message: x.message,
            timestamp: x.timestamp || (new Date())
          }])
      }
    })
  },[]);

  // useEffect(() => {
  //   //alert("Total lines = "+ lines.length);

  // }, [lines]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    const newMsg = {
      sender: "Me",
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    };
    setLines([...lines, newMsg]);

    chatroomRef.push(newMsg);

    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13) {
      onSend();
    }
  };

  return (
    <App>
      <div className="App col-6">
        <div className="App-chatroom">
          {
            lines.map(x => {
              return <div className="App-chatroom-text">
                <div className="App-chatroom-sender">
                  {x.sender + ":>"}
                </div>
                <div className="App-chatroom-message">
                  <div>
                    {x.message}
                  </div>
                  <div>
                    {x.timestamp.toLocaleString()}
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <div className="App-textbox">
          <input type="text" className="App-textbox-input"
            value={text} onChange={onTextChange} onKeyPress={keyPress} />

          <div className="App-textbox-send" onClick={onSend}>Send!</div>
        </div>
      </div>
    </App>
  );
}

export default Chatbox;
