import './Chatbox.css';
import {useEffect, useState} from 'react' ;
import App from "./App";
import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');


function Chatbox() {

  const [text,setText] = useState("");
  const [lines, setLines] = useState([]);
  
 useEffect(() =>{
   chatroomRef.on('child_added',snapshot =>{
     let x = snapshot.val();

     setLines(line =>[...line,{
       sender: x.sender,
       message: x.message,
       timestamp: new Date()
     }])
   })
 },[]);
  
  
  const  onTextChange = (event) =>
  {
    setText(event.target.value);
  };

  const onSend = ()=>{
   chatroomRef.push({
     sender: "BiRDLAN",
     message: text
   });

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
              {x.timestamp.toLocaleDateString()}
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
