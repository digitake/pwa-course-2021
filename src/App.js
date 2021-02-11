
import './App.css';
import { useState, usestate } from 'react';

function App() {

  const [text, setText] = useState("")

  const onTextChange = (event) => {
    setText(event.target.value)
  }

  const [textLines, setTextLines] = useState([]);

  const onSend = () => {
    setTextLines(textLines => [...textLines,text])
    setText("");
  }

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
          textLines.map(x=>{
            return <div className="App-chatroom-text">
              {x}
            </div>
            
          })
        }
        <div className="App-chatroom-text">
          {text}
        </div>
        
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"value={text} onChange={onTextChange}/>
        <div className="App-textbox-send"onClick={onSend}>   Send!</div>
      </div>
    </div>
  );
}

export default App;
