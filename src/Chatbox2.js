import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Friend from './Friend.png';
import Profile from './Profile.png';
import Group from './Group.png';
import Chat from './Chat.png';

import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-2');


function Chatbox2() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect(() => {
    chatroomRef.on('child_added', snapshot => {
      let x = snapshot.val();

      setLines(line => [...line, {
        sender: x.sender,
        message: x.message,
        timestamp: new Date(x.timestamp)
      }])
    });

  }, []);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    chatroomRef.push({
      sender: "Benz",
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });

    setText("");
  };

  const keyPress = (event) => {

    console.log("hello");
    if (event.which === 13) {
      onSend();
    }
  };

  return (
    <div className="Chatbox2">
      <div className="Chatbox2-header">
        <Link to="/friend-list">
          <img className="image-header" src={Friend} width="50" alt="เพื่อน" />
        </Link>
        <Link to="/profile">
          <img className="image-header" src={Profile} width="50" alt="โปร์ไฟล์" />
        </Link>
        <Link to="/group">
          <img className="image-header" src={Group} width="50" alt="กลุ่ม" />
        </Link>
        <Link to="/chatbox2">
          <img className="image-header" src={Chat} width="50" height=" 40" alt="กลุ่ม" />
        </Link>
      </div>
      <div className="Chatbox2-chatroom">
        {
          lines.map((x, key) => {
            return (
              <div key={key}>
                <img className="image-profile" src={Profile} />
                <div className="Chatbox2-chatroom-text">
                  <div>
                    <span style={{ float: "left", color: "#444" }}>{x.sender + " : "} {x.message}</span><span style={{ float: "right", color: "#666", fontSize: "1rem" }}>{x.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="Chatbox2-textbox">
        <input type="text" className="Chatbox2-textbox-input"
          value={text} onChange={onTextChange} onKeyPress={keyPress} />
        <div className="Chatbox2-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>

  );
}

export default Chatbox2;