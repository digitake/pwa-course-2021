import './Chatbox.css';
import {Link} from 'react-router-dom';
import{useState, useEffect }from 'react';
import './App.css';
import App from './App';
import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1');

import firebase from './firebaseConfig';

const chatroomRef = firebase.database().ref('chatroom-1')

import firebase from './firebaseConfig.js'; //ดึง config มาเตรียมใช้งาน

const chatroomRef = firebase.database().ref('chatroom-1')

function Chatbox(){

    const [text, setText] = useState("")
    const [lines, setLines] = useState([]);

    useEffect(() => {
<<<<<<< HEAD
    chatroomRef.on('child_added', snapshot => {
      let x = snapshot.val();
      setLines(l => [...l, {
        sender: x.sender,
        message: x.message,
        timestamp: (new Date(x.timestamp))
      }])
     });
    }, []);
=======
      //alert("Total text chat = "+ lines.length)
      chatroomRef.on('child_added' , snapshot => {
        let x = snapshot.val();
        setLines( l => [...l, {
          sender: x.sender,
          message : x.message,
          timestamp : (new Date(x.timestamp))
        }])
      });
    },[]);
>>>>>>> 6cc06eae051886c92aa147a38ef348866b13737b
    
    const onSend = () =>{

<<<<<<< HEAD
     chatroomRef.push({
       sender: "Me",
       message: text,
       timestamp: firebase.database.ServerValue.TIMESTAMP
=======
    const onSend = (event) =>{
      chatroomRef.push({
        sender: "Me" , 
        message: text,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
>>>>>>> 6cc06eae051886c92aa147a38ef348866b13737b

     });
    
      setText("");
    };

    const onTextChange = (event) => {
      setText(event.target.value);
      };
  

    const keyPress = (event) =>{
      if(event.which === 13){
        onSend();
      }
    }

  return(
  <App>
    <div className="Chatbox">
      <div className="Chatbox-chatroom">
        {
          lines.map(x =>{
            return <div className="Chatbox-chatroom-text">
              <div>
               {x.sender+ ": "}
               {x.message+ " "}
<<<<<<< HEAD
               {x.timestamp.toLocaleString()}
=======
              </div>
              <div>
               {x.timestamp.toLocaleDateString()}
>>>>>>> 6cc06eae051886c92aa147a38ef348866b13737b
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
};

export default Chatbox;
