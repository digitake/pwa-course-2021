import './Chatbox.css';
import {Link} from 'react-router-dom';
import{useState, useEffect }from 'react';
import './App.css';
import App from './App';
import firebase from './firebaseConfig.js'; 

const chatroomRef = firebase.database().ref('chatroom-2')

function ChatboxTwo(){
    
    const [text, setText] = useState("")
    const [lines, setLines] = useState([]);

    const [name, setName] = useState("Myname");

    useEffect(() => {
    chatroomRef.on('child_added', snapshot => {
      let x = snapshot.val();
      setLines(l => [...l, {
        sender: x.sender,
        message: x.message,
        timestamp: (new Date(x.timestamp))
      }])
     });
    }, []);
    
    const onTextChange = (event) => {
      setText(event.target.value);
    };

    const onNameChange = (event) => {
      setName(event.target.value);
    };


    const onSend = () =>{

     chatroomRef.push({
       sender: name,
       message: text,
       timestamp: firebase.database.ServerValue.TIMESTAMP

     });
    
      setText("");
    };

   
  

    const keyPress = (event) =>{
      if(event.which === 13){
        onSend();
      }
    }

  return(
  <App>
    <div className="Chatbox">
      <input type="text" value={name} onChange={onNameChange}/>
      <div className="Chatbox-chatroom">
        {
          lines.map(x =>{
            return <div className="Chatbox-chatroom-text">
              <div>
              <div className="Chatbox-chatroom-text2">
               <p>{x.sender+ ": "}</p>
               </div>
               <div className="Chatbox-chatroom-text1">
               {x.message+ " "}
               </div>
               <div className="Chatbox-chatroom-text3">
               <h1>{x.timestamp.toLocaleString()}</h1>
               </div>
             </div>
            </div>
          })
        }
      </div>
      <div className="Chatbox-textbox ">
        <input type="text" className="Chatbox-textbox-input" 
        value ={text} onChange= {onTextChange} onKeyPress={keyPress}/>

        <div className="Chatbox-textbox-send " onClick ={onSend}>Send!</div>

      </div>
    </div>
  </App>
);
}

export default ChatboxTwo;