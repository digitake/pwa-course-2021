import logo from './ss02.png';
import './App.css';
import { useState } from 'react'


function App() {

  const [text, setText] = useState("")

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          {text}
        </div>
        <div className="App-chatroom-text">
          {text}
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}/>
        <div className="App-textbox-send">Send!</div>
      </div>
    </div>
  );
}

export default App;
