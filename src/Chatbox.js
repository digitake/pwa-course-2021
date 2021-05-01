import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Friend from './Friend.png';
import Profile from './Profile.png';
import Group from './Group.png';
import Chat from './Chat.png';

import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');


function Chatbox() {
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

    <div className="Chatbox">

      <div className="Chatbox-header">
        <Link to="/friend-list">


          <img src={Friend} width="50" height=" 60" alt="เพื่อน" />

        </Link>

        <Link to="/profile">

          <img src={Profile} width="50" height=" 40" alt="โปร์ไฟล์" />

        </Link>

        <Link to="/group">

          <img src={Group} width="50" height=" 40" alt="กลุ่ม" />

        </Link>

        <Link to="/chatbox">

          <button>
            <img src={Chat} width="50" height=" 40" alt="กลุ่ม" />
          </button>

        </Link>
      </div>
      <div className="Chatbox-chatroom">

        {
          lines.map(x => {
            return <div className="Chatbox-chatroom-text">
              <div style={{ color: "#555" }}>
                {x.timestamp.toLocaleTimeString()}
              </div>
              <div>
                {x.sender + ": "}
              </div>
              <div>
                {x.message}
              </div>
            </div>
          })
        }
      </div>
      <div className="Chatbox-textbox">
        <input type="text" className="Chatbox-textbox-input"
          value={text} onChange={onTextChange} onKeyPress={keyPress} />
        <div className="Chatbox-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>

  );
}

export default Chatbox;
