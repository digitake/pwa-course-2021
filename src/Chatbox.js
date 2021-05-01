import './Chatbox.css';
import {useState,useEffect} from 'react' ;
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
        timestamp: new Date(x.timestamp)
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
    <div className="App">
    <input type="text" className="App-textbox-input" value={chatroom} onChange={onRoomChange} />
    <input type="text" className="App-textbox-input" value={name} onChange={onNameChange} />
      <div className="App-chatroom">
        {

          lines.map(x =>{
            return <div className="App-chatroom-text">
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
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend} >ส่ง</div>

      </div>
    </div>
    </App>
  );
}

export default Chatbox;
