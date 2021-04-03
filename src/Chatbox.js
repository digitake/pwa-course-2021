import './Chatbox.css';
import {useState , useEffect} from 'react';
import App from './App';

import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');


function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    chatroomRef.on('child_added' , snapshot =>{
      let x = snapshot.val();

      setLines(line => [...line, {
      sender: x.sender ,
      message: x.message,
      timestamp: new Date(x.timestamp)
      }])
    });

  }, []);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    chatroomRef.push({
      sender: "Benz",
      message: text ,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });

    setText("");
  };

  const keyPress = (event) => {

    console.log("hello");
    if (event.which === 13){
      onSend();
    }
  };

  return (
    <App>
    <div className="App">
      
      
      <div className="Chatbox-chatroom">
        
        {
          lines.map(x => {
            return <div className="Chatbox-chatroom-text">
               <div>
              {x.sender+ ": "}
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
         value = {text} onChange={onTextChange} onKeyPress = {keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
    </App>
  );
}

export default Chatbox;
