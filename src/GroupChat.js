import './App.css';
import{Link} from 'react-router-dom';
import {useState} from 'react';
import Back from './Back.png';


function GroupChat() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines, text]);
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };

  return (
    <div className="App">
    
      <div className= "App-chat-friend">
    
          <div className= "App-head-chatFriend">
             <Link to="/home" >
               <img src={Back}/>
               </Link> 
               </div>
               <div className= "App-head-chatFriend">
               
     <div className= "App-head-chatFriend">
    
     </div>
               </div>
               Group Chat
               <div className= "App-head-chatFriend">
             
</div>
<div className= "App-head-chatFriend">

</div>
            
      </div>
      <div className="App-chatroom">
        {
          lines.map(x => {
            return <div className="App-chatroom-text">
                    {x}
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
  );
}

export default GroupChat;