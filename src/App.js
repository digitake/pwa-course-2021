import { useState } from 'react';
import './App.css';

function App() {
  const[text, setText] = useState("");

  const [lines, setLines] = useState(["Hello KumFile", "How are you?", "Right now I stay at capital city", "I relexed from my traveling", "I will Say Hi again later!!!!!!jajaja hahaha hahah"]);


  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    setLines(lines => [...lines, text]);
    setText("");
  };

  return (
    <div className="App">
      <div className="App-header">
        Daring
      </div>
      <div className="App-chatroom">
        {

          lines.map (x=>{
            return <div className= "App-chatroom-text">
              {x}
              </div>
          })
        }
        
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value = {text} onChange ={onTextChange}/>
        <div className="App-textbox-send" onClick = {onSend}></div>
      </div>
    </div>
  );
}

export default App;
