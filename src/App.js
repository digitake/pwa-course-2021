import {useState} from 'react';
import './App.css';

function App() {
  const[text, setText] = useState("");

  const [lines,setTLines] = useState(["Stupid","duck","CheckDM","Eatdog","Eatbat"]);

  const onTextChange = (event) =>{
    setText(event.target.value);
  };
  
  const onSend = (event) => {
    setTLines(lines => [...lines, text]);
    setText("");
  };

  return (
    <div className="App">
      <div className="App-header">
        DarkLord666-
      </div>
      <div className="App-chatroom">
        {
          lines.map(x =>{
            return <div className="App-chatroom-text">
              {x}
              </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value = {text} onChange = {onTextChange}/>
        <div className="App-chatroom-text" onClick = {onSend}>Talk</div>
      </div> 
    </div>  
  );
}

export default App;
