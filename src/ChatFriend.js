import './App.css';
import { useState, useEffect } from 'react';
import HeaderOfChat from './HeaderOfChat';
import firebase from './firebaseConfig';

var chatroomRef;
var EnterYourFriendName ="Enter Your Private Chatroom Name ";
var EnterYourName ="Enter Your Name";


function  ChatFriend() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

                                   //Set Name
  const [name, setName] = useState(" ");
                                  //Set ChatRoom
  const [chatroom, setChatroom] = useState(" ");


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


  return (
    <HeaderOfChat>
      
      <div className="App">
    {EnterYourFriendName}
    <input type="text" value={chatroom} onChange={onRoomChange}/>
    {EnterYourName}
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
    </HeaderOfChat>
  );
}

export default ChatFriend;