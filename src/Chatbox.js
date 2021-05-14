
import './Chatbox.css'
import {useState,useEffect, useRef} from 'react'
import App from './App';
import firebase from './firebaseConfig';
var chatroomRefs;
function Chatbox() {

  const [text,setText] = useState("");
  const [lines,setLines] = useState([]);
  const [name,setname] = useState("Type your name");
  const [chatroom,setchatroom] = useState("chatroom");
  const messagesEndRef = useRef(null);
  const scrollToBottom = ()=>{
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
  }
  useEffect(()=>{
    setLines(_=>[])
    chatroomRefs= firebase.database().ref(chatroom)
    chatroomRefs.on('child_added',(snapshot) =>{
      let x= snapshot.val();
      setLines(l =>[...l,{
        sender: x.sender,
        massage: x.massage,
        timestamp: new Date(x.timestamp)
      }]);
      scrollToBottom()
    })
    scrollToBottom();
    return()=>{
      chatroomRefs.off('child_added')
    };
  },[chatroom]);
  const onTextChange = (event) => {
    setText(event.target.value);
  };
  const onNameChange = (event) => {
    setname(event.target.value);
  };
  const onRoomone = () => {
    setchatroom("sdsd");
  };
  const onRoomtwo = () => {
    setchatroom("chatroom");
  };
  const onSend =() =>{
    chatroomRefs.push({
      sender : name,
      massage : text,
      timestamp : firebase.database.ServerValue.TIMESTAMP
    });
    setText("");
  };
  const keyPress = (event) =>  {
    if(event.which===13){
      onSend();
    }
  }
  return (
  <App>
    <div className="App">
      <div className="App-header">
           Cat Chat
        <div className = "Chatroom-select">
        <button type="submit" className="Chatroom-select-button" value={chatroom} onClick={onRoomone}>Chatroom1</button>
        <button type="submit" className="Chatroom-select-button" value={chatroom} onClick={onRoomtwo}>Chatroom2</button>
        <input type="text" className="Chatroom-select-button" value={name} onChange={onNameChange}></input>
          </div>
      </div>
      <div className="App-chatroom">
      
      <div className="Center">
      
          Hello Welcome!!
        </div>
        <div className="App-chatroom-text">
          ( This is a cat chat ) 
        </div>
        <div className="App-chatroom-text">
          Only cat can chat it 
        </div>
        <div className="App-chatroom-text">
          Good Luck Meaow ^^ 
        </div>
        <div className="">
          {
          lines.map(x => {
          return <div className="App-chatroom-text">
                  <div className="App-name">                 
                  {x.sender+" "}
                  </div>
                  <div className="App-message">
                  {x.massage +" "}
                  </div>
                  <div className="App-time">
                  {x.timestamp.toLocaleString()}
                  </div>
                  </div>                  
                        }
                    )      
          }  
        </div>
        <div ref={messagesEndRef}/>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>
          ส่ง
       </div>
      </div>
    </div>
  </App>
  );
}
export default Chatbox;
