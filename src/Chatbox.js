import { useState} from 'react';
import './Chatbox.css';
import { Link} from 'react-router-dom'
import App from './App';
import firebase from './firebaseConfig';
import { useEffect } from 'react';

const chatroomRef = firebase.database().ref('chatroom-1');

function ChatBox({ children }) {

  const [text, setText] = useState("");

  const [lines, setLines] = useState([]);

  const[name, setName] = useState("MyName");

  // () => {} same as function() {}  --lambda notation
  useEffect(() => {
      chatroomRef.on('child_added', snapshot => {
          let x = snapshot.val();
          setLines(l => [...l, {
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
};

  
  const onSend = () => {
      // push to firebase sever
      chatroomRef.push({
          sender: name,
          message: text,
          timestamp: firebase.database.ServerValue.TIMESTAMP
      });
      setText("")
  }

  const keyPress = (event) => {
      if (event.which === 13) {
          onSend();
      }
  };

  return (
      <>
          <App>
              <div className = "Chatbox-header">
                  <input type = "text" value = {name} onChange = {onNameChange}/>
                    <div className = "Chatbox-header1">
                    <Link className={"Chatbox-header1"} to="/home"/>
                    </div>
                    <div className = "Chatbox-header2"></div>
                    <div className = "Chatbox-header3"></div>  
              </div>

              <div className="App">
                  <div className="App-chatroom">
                  {
                    lines.map(x => {
                              return <div className="App-chatroom-text">
                                  <div className="profile-read"></div>
                                  <div className="App-textPosition">
                                      {x.sender + " : "}
                                      {x.message}
                                  </div>
                                  <div className="App-Time-Position"> {x.timestamp.toLocaleTimeString()} </div>
                              </div>
                          })
                  }
                  </div>
                  {children}
              </div>
               {/*ChatBar Input*/}
            <div className="App-textbox">
                    <input type="text" className="App-textbox-input" 
                    value={text} onChange={onTextChange} onKeyPress={keyPress}/>
                    <div className="App-textbox-send"> 
                    <Link className = {"App-textbox-send"} to = "/music"/>
                    </div>
                    <div className="App-textbox-send1" onClick={onSend}></div>
                    <div className="App-textbox-send2" onClick={onSend}></div>
                  </div>
          </App>
      </>
  );
}

export default ChatBox;
