import './Chatbox.css';
import {useEffect, useState} from 'react' ;
import App from "./App";
import firebase from './firebaseConfig';


var chatroomRef;


function Chatbox() {

  const [text,setText] = useState("");
  const [lines, setLines] = useState([]);
  const [name, setName] = useState("Myname")
  const [chatroom, setChatroom] = useState("chatroom");

  useEffect (() =>{
    
  },[chatroom]);


  useEffect(() =>{
    setLines(_=>[])
    chatroomRef = firebase.database().ref(chatroom);
    chatroomRef.on('child_added',snapshot =>{
      let x = snapshot.val();
      setLines(line => [...line,{
        sender: x.sender,
        message: x.message,
        timestamp: new Date()
      }])
    })
    return () =>{
      chatroomRef.off('child_added')
    };
  },[chatroom]);
  const  onTextChange = (event) =>
  {
    setText(event.target.value);
  };

  const  onNameChange = (event) =>{
    setName(event.target.value)
  };

  const  onRoomChange = (event) =>{
    setChatroom(event.target.value)
  };


  const onSend = ()=>{
    chatroomRef.push({
      sender:name,
      message: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    })
    setText("");
  };
  const keyPress = (event)=>{

    if (event.which === 13){
      onSend();
    }
  };


  return (
      <App>
    <div className="Chat">
    <input type="text" className="Chat-textbox-input" value={chatroom} onChange={onRoomChange} />
    <input type="text" className="Chat-textbox-input" value={name} onChange={onNameChange} />
      <div className="Chat-chatroom">
        {

          lines.map(x =>{
            return <div className="Chat-chatroom-text">
                <div>
                  {x.sender+":"}
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
      <div className="Chat-textbox">
        <input type="text" className="Chat-textbox-input" value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="Chat-textbox-send" onClick={onSend} >ส่ง</div>

      </div>
    </div>
    </App>
  );
}

export default Chatbox;
