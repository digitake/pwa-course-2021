import React, { useState } from 'react';
import './App.css';


function App() {

const [text,setText] = useState("");

const [lines, setLines] = useState(["kapo1","kapo2","kapo3"]);

const onTextChange = (event) => {
  setText(event.target.value);
};

const onSend = () => {
  setLines(line => [...lines,text]);
  setText("")
}
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
          lines.map(x=>{
          return <div className="App-chatroom-text">
          {x}
          </div>
          })
        }

      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value = {text} onChange={onTextChange}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
  );
}

export default App;
