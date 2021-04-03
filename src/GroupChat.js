import './App.css';
import {useState,useEffect} from 'react';
import HeaderOfChat from './HeaderOfChat';
import firebase from './firebaseConfig';


const chatGroupRef=firebase.database().ref('chatGroup')

function GroupChat() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
  useEffect(()=>{chatGroupRef.on('child_added',snapshot=>{ let x = snapshot.val();
   
    setLines(line=>[...line,{
      sender:x.sender,
      message:x.message,
      timeStamp:new Date(x.timeStamp)
    }])
    })
  },[]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    chatGroupRef.push({
sender:"Me",
message:text,
timeStamp:firebase.database.ServerValue.TIMESTAMP

    });            

setText("");
};

  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };

  return (
    <HeaderOfChat>
   <div className="App">
   
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
                   {" Time "+x.timeStamp.toLocaleString()}
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

export default GroupChat;