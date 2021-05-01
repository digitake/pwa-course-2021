
import './Chatbox.css'
import {useState,useEffect} from 'react'
import App from './App';
import firebase from './firebaseConfig';
const chatroomRef = firebase.database().ref('chatroom-1');

var chatroomRef;

function Chatbox() {
  const [text,setText] = useState("");
  const [lines,setLines] = useState([]);
  const [name, setName] = useState("MyName");
  const [chatroom, setChatroom] = useState("chatroom");

  useEffect(()=>{
    setLines(_=>[])
    chatroomRef = firebase.database().ref(chatroom);
    chatroomRef.on('child_added',(snapshot) =>{
      let x= snapshot.val();

      setLines(l =>[
        ...l,
        {
         sender: x.sender,
         massage: x.massage,
         timestamp: new Date(x.timestamp)
      }])
    });

    return () => {
      chatroomRef.off('child_added')
    }
  },[chatroom]);

  const onRoomChange = (event) => {
    setChatroom(event.target.value);
  }

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onSend =() =>{
    chatroomRef.push({
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

            <input type="text" value={chatroom} onChange={onRoomChange}/>

            <input type="text" value={name} onChange={onNameChange}/>

      <div className="App-header">
        Cat Chat
      </div>
      <div className="App-chatroom">
      <div className="App-chatroom-text">
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
        <div className="App-chatroom">
          {

          lines.map(x => {
          return <div className="App-chatroom-text">                 
                  {x.sender+" : "}
                  {x.massage +" "}
                  {x.timestamp.toLocaleString()}
                  </div>                  
                        }
                    )      
          }  
        </div>
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
