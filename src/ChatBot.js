import './App.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';

function ChatBot() {
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
        <div className="App-header"> <Link to="/"> <div className="App-back-icon"> <i class="fas fa-chevron-circle-left"></i> </div> </Link>
        chatbot 
        </div>
        <div className="App-content">
          {
            lines.map(x => {
              return <div className="App-content-text">
                      {x}
                     </div>
            })
          }
        </div>
        <div className="App-chatbot-icon" ><i class="fas fa-microphone"></i>
        <i class="fas fa-handshake"></i>
        <i class="fas fa-heart"></i>
        <i class="fas fa-volume-up"></i>
        </div>
        <div className="App-textbox">
          <input type="text" className="App-textbox-input" 
          value={text} onChange={onTextChange} onKeyPress={keyPress}/>
          <div className="App-textbox-send" onClick={onSend}> <i class="far fa-paper-plane"></i> </div>
        </div>
      </div>
    );
  }  

export default ChatBot;