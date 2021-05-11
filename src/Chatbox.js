import './Chatbox.css';
import {useEffect, useState} from 'react';
import App from './App';
import firebase from './FirebaseConfig';

const chatroomRaf = firebase.database().ref('chatroom-1');


function Chatbox() {
  

  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect(() => {

    chatroomRaf.on('child_added', snapshot =>{
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
  
  const onSend = () =>{

    chatroomRaf.push({
      sender: "Tae",
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
  });

    setText("");
  };
  
  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };
    
  return (
    <div className="App-header">
    <App>

      <div className="App col-6">

      <div className="App-chatroom">
      {
        lines.map(x => {
          return <div className="App-chatroom-text">

            <div>
              {x.sender+";"}
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

      <div className="App-textbox">

        <input type="text" className="App-textbox-input" 

        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        
        <div className="App-textbox-send" onClick={onSend}>Send!</div>

      </div>

    </div>

    </App>
    </div>
  );
  
}

export default Chatbox;
