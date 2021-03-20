import './App.css';
import {useState,useEffect} from 'react';
import{Link} from 'react-router-dom';
import App from './App';

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

 
//render

  return (
      <App>
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
    </App>
  );
}

export default Chatbox;