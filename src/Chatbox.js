import './App.css';
import {useState,useEffect} from 'react';
import{Link} from 'react-router-dom';
import App from './App';
import firebase from './firebaseConfig';


var chatroomRef;

function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  const [name, setName] = useState("MyName");
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
          timestamp:  new Date(item.timestamp)
        }]);
    })
  
   
  return () => {
    chatroomRef.off('child_added')
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



const onSend = () => {
  const newMsg = {
    
    sender: name,
    message: text,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  };


  

  
    chatroomRef.push(newMsg);

    setText("");
  };
  const keyPress = (event) => {
    if (event.which === 13) {
      onSend();
    }
  };

 
//render

  return (
      <App>
    <div className="App">
    <input type="text" value={chatroom} onChange={onRoomChange}/>

    <input type="text" value={name} onChange={onNameChange}/>
   
      <div className="App-chatroom">
        {
          lines.map(x => {
            return <div className="App-chatroom-text">
                     
                   <div className="App-chatroom-text-sender">
                       {x.sender+":"}
                   </div>
                   <div className="App-chatroom-text-message"> 
                     {x.message} 
                      <div >                      
                      {" Time "+x.timestamp.toLocaleString()}
                      </div>
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
