import './App.css';
import {useState} from 'react';
import HeaderOfChat from './HeaderOfChat';


function GroupChat() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines, {People:"Me",message:text}]);
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
                    {x.People+" :"}
                  </div>
                  <div className="App-chatroom-messag e"> 
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
    </HeaderOfChat>
  );
}

export default GroupChat;