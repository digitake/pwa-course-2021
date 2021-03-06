import './Chatbox.css';
import { useState } from 'react';
import App from './App'

function Chatbox() {

    const [text, setText] = useState("");
    const [lines, setLines] = useState([]);
  
    const onTextChange = (event) =>{
      setText(event.target.value)
    };
  
    const keyPress = (event) => {
      if (event.which === 13){
        onSend();
      }
    };
  
  const onSend = () => {
    setLines(lines => [...lines, text])
    setText("");
  }

  return (
    <App>
        
            <div className = "App-chatroom">
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
        
    </App>
  );
}
export default Chatbox;