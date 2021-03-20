import './App.css';
import{Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import HeaderOfChat from './HeaderOfChat';



function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect(()=>{
   
  },[lines]);
  
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines, 
      
      {sender:"Me",message:text,timeStamp:(new Date())
  
  
  }]);
    setText("");
  };

  const keyPress = (event) => {               
    if (event.which === 13){
      onSend();
    }
  };

  return (
    <HeaderOfChat>
    <div className="App">
    
    <div className="App-chatroom">
        {
          lines.map(x => {
            return <div className="App-chatroom-text">
                   <div className="App-Chatroom-sender">
                       {x.sender+":"}
                   </div>
                   <div className="App-chatroom-message"> 
                      {x.message} 
                      <div >                      
                      {" Time  "+x.timeStamp.toLocaleString()}  
                      </div>
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
    </HeaderOfChat>
  );
}

export default ChatFriend;