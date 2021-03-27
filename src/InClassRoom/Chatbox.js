import './Chatbox.css';
import { useState,useEffect } from 'react';
import App from './App';

import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');

function Chatbox() {

    const [text,setText] = useState("");
    const [lines,setLines] = useState([]);

    useEffect(()=>{
      chatroomRef.on('child_added',snapshot => {
        let x = snapshot.val();
        setLines(l => [...l,{
          sender: x.sender,
          message: x.message,
          timestamp: (new Date())
        }])
        
      })

      //alert("Total text chat = "+lines.length);
      //sendDataToServer()
    },[]);    //[lines]);

    const onTextChange = (event) => {
      setText(event.target.value);
    };

    const onSend =() => {
      chatroomRef.push({
        sender: "Rut",
        message: text,
      })   
      setText("");                         /*setLines([...lines,{
                                            sender: "Me" ,
                                            message: text,
                                            timestamp: (new Date())}]);
                                            setText("");*/
    };

    const keyPress = (event) => {
      if (event.which === 13){
        onSend();
      }
    };

  return (
    <App>
    <div className="App">     
      <div className="App-chatroomlab">
        {
          lines.map(x =>{
           return <div className="App-chatroom-text">
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
      <div className="App-textbox">
      <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>

        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
    </App>  
  );
}

export default Chatbox;

/*                      
<div>
{x.timestamp.toLocaleDataString()}
</div>
*/ 
