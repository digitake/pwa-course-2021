import './DarkChat.css';
import App from './App';
import { Link } from 'react-router-dom';
import { RiChatPrivateFill } from 'react-icons/ri';
import { MdSettings } from 'react-icons/md';
import { useState, useEffect } from 'react';



import firebase from './firebaseConfig'; 

const chatroomRef = firebase.database().ref('chatroom-2');

function DarkChat() {
    
    
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  const[name, setName] = useState("UNKNOW");

  useEffect(() =>{
    chatroomRef.on('child_added', snapshot => {
      let x = snapshot.val();
      setLines(l =>[...l, {
        sender : x.sender,
        message : x.message
        , timestamp : (new Date(x.timestamp))
      }])
    })
  }, []);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
   chatroomRef.push({
    sender : name,
    message: text,
    timestamp: firebase.database.ServerValue.TIMESTAMP

   });
 
    setText("");
  };
    return (
        <div className ="DarkChat">
            <App>
            <div className="App">
       <div className="App-chatroom">
         {
           lines.map(x =>{
               return <div className="App-chatroom-text">
                 <div className="App-message">
                   {x.sender+":"}
                   {x.message}
                 </div>
                  {<div className="App-time">
                      {x.timestamp.toLocaleString()}
                  </div>}
                 </div>
                 
           }
           )
         }
       </div>
       <div className="App-textbox">
       <div className="App-setting">
       <Link to="/friend-list">
             <div>
               <MdSettings size = "2em" color = "white"/> 
               </div>
             </Link>
             <Link to="/App">
             <div>
               <RiChatPrivateFill size = "2em" color = "white"/> 
               </div>
             </Link>
       </div>
         <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}/>
         <div className="App-textbox-send" onClick={onSend}>Send!</div>
       </div>
     </div>
            </App>
        </div> 

    );
};

export default DarkChat;