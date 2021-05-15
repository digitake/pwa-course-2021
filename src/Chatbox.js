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
      <div className="Calender">
      <iframe title="calender" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FBangkok&amp;src=YXNyaWluLmJyZnBiQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y2xhc3Nyb29tMTE3Mjc1MDc4MzQ4NTYyOTg5NDA0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=Y2xhc3Nyb29tMTE0ODgxODAzODg3MTk2NDg0OTkyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=Y2xhc3Nyb29tMTE4MjYwNjQ2ODIwMTk5MTQ5NTAzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=Y2xhc3Nyb29tMTAzMzQ3NDg4NzExMDAxMDg3NDM3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dGgudGgjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%237986CB&amp;color=%237986CB&amp;color=%23004d40&amp;color=%23a52714&amp;color=%23b80672&amp;color=%233e2723&amp;color=%237986CB&amp;title=Cat%20chat"   width="100%" height="600"  scrolling="no"></iframe>
        </div>
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
