import { useState,useEffect } from 'react';
import './ProChatroom.css';
import BGChatroom from './BGChatroom';

import firebase from './firebaseConfigs';

const chatroomRef = firebase.database().ref('project');

function ProChatroom() {

const [text,setText] = useState("")

const [lines,setLines] = useState([""]);

useEffect(()=>{
  chatroomRef.on('child_added',snapshot => {
    let x = snapshot.val();
    setLines(l => [...l,{
      sender: x.sender,
      message: x.message,
      timestamp: (new Date(x.timestamp))
    }])
    
  })

  
  
},[]);    

const onTextChange = (event)=>{
  setText(event.target.value);
};

const onSend =() => {
  chatroomRef.push({
    sender: "Rut",
    message: text,
    timestamp : firebase.database.ServerValue.TIMESTAMP
  })   
  setText("");                         
  };
  
  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };

  return (

    <div className="mainchatroom">
      <p className = "noelly"></p>
      <BGChatroom/>
      <div className="BG-Chatroom">
        {
          lines.map(x =>{
          return  <div className="Chatroom-text">
                      <div>
                        {x.sender+": "}
                      </div>
                      <div>
                        {x.message}
                      </div>
                      
                      
                     
                  </div>
          })
        }
      </div>
      <div className="textbox">
        <input type="text" className="textbox-input" value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="textbox-send"onClick={onSend}><img src= "/Project/Prochatroom/send.png" alt = "/Project/Prochatroom/send.png" width="70px" height="70px"/></div>
      </div>
    </div>
  );
}

export default ProChatroom;