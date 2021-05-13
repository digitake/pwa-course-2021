import './Chatbox.css';
import {useEffect, useState} from 'react';
import App from './App';
import firebase from './firebaseConfig';


var chatroomRef;

function Chatbox() {

  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);  
  const [name, setName] = useState("Myname");
  const [chatroom, setChatroom] = useState("chatroom");

  useEffect(() => {
    
    setLines(_=>[])
    chatroomRef = firebase.database().ref(chatroom);
    chatroomRef.on('child_added', (snapshot) => {
      let item = snapshot.val();

      setLines(l => [
        ...l, 
        {
        sender: item.sender,
        message: item.message,
        timestamp: new Date(item.timestamp)
      }]);
    })

  return ()=> {
    chatroomRef.on('child_added')
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
  }

  const onSend = () =>{
    const newMsg = {
      sender: name,
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    chatroomRef.push(newMsg);
    
    setText("");
  };

  const KeyPress = (event) => {
    if (event.which === 13) {
      onSend();
    }
  };



  return (
    <App>
      <div className="App">  

      <input type="text" value={chatroom} onChange={onRoomChange}/>

      <input type="text" value={name} onChange={onNameChange}/>
        <div className="App-chatroom">   
          {
            lines.map(x => {
              return <div className="App-chatroom-text">
                <div className="App-chatroom-sender">
                  {x.sender + ":>"}
                </div>
                <div className ="App-chatroom-message">
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
        <input type="text" className="App-textbox-Input" 
            value={text} onChange={onTextChange} onKeyPress={KeyPress}/>

        <div className="App-textbox-send" onClick={onSend}>Send</div>
      </div>
      </div>
    </App>
  );
}

export default Chatbox;
