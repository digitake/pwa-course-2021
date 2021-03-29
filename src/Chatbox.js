import { useState } from 'react';
import './Chatbox.css';
import { Link} from 'react-router-dom'
import App from './App';
//import firebase from './firebaseConfig';
import { useEffect } from 'react';

//const chatroomRef = firebase.database().ref('chatroom-1');

function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
  //useEffect(() => {
   // chatroomRef.on('child_added', snapshot => {
     // let x = snapshot.val();
     // setLines(l => [...l, {
      //  sender: x.sender,
      //  message: x.message,
      //  timestamp: (new Date())
   //   }])
  //  });
 // }, []);

  const onTextChange = (event) => {
    setText(event.target.value);
  };
  const onSend = () =>{
    //Push message to firebase
    //chatroomRef.push({
     // sender: "Me",
      //message: text,
   // })
   setLines(l => [...l, {
    sender: "Me",
    message: text,
    timestamp: (new Date())
  }])

    setText("");
  };
  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };
  
  return (
    <App>
    <div className="Chatbox">
      
      <div className = "Chatbox-header">
        <div className = "Chatbox-header1">
          <Link className={"Chatbox-header1"} to="/home"/>
        </div>
        <div className = "Chatbox-header2"></div>
        <div className = "Chatbox-header3"></div>
      </div>
     
      
      <div className="Chatbox-chatroom">
        {
          lines.map(x => {
            return <div className="Chatbox-chatroom-text">
              <div>
                {x.sender + ":"}
              </div>
              <div>
                {x.message}
              </div>
              <div>
                {x.timestamp.toLocaleDateString()}
              </div>
            </div>
          })
        }
      </div>
      <div className="Chatbox-textbox">
        <input type="text" className="Chatbox-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="Chatbox-textbox-send" onClick={onSend}></div>
        <div className="Chatbox-textbox-send1" onClick={onSend}></div>
        <div className="Chatbox-textbox-send2" onClick={onSend}></div>
      </div>
    </div>
    </App>
  );
}
export default Chatbox;
