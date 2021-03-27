import './Chatbox.css';
import { useEffect, useState } from 'react';
import App from './App'

import firebase from './firebaseConfig';

const chatroomref = firebase.database().ref('chatroom-1')

function Chatbox() {

    const [text, setText] = useState("");
    const [lines, setLines] = useState([]);

    useEffect( () => {
      chatroomref.on('child_added',snapshot =>{
        let x = snapshot.val();
        setLines(l => [...l,{
          Sender:"Me",
          Message: tex
        }])
      });


    }, []);
  
    const onTextChange = (event) =>{
      setText(event.target.value)
    };
  
    const keyPress = (event) => {
      if (event.which === 13){
        onSend();
      }
    };
  
  const onSend = () => {
    chatroomref.push({
      Sender: "Me",
      Message: text
    });
    
    setText("");
  }

  return (
    <App>
            <div className = "App-chatroom">
                {
                lines.map(x => {
                return <div className="App-chatroom-text">
                       <div>
                         {x.Sender+": "}
                       </div>
                       <div>
                        {x.Message}
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
        
    </App>
  );
}
export default Chatbox;