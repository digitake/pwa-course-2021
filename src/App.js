import './App.css';
import { useState } from 'react';

function App() 
{
  const [text, setText] = useState("");

  const [line, setLine] = useState(["nsg1"]);

  const onTextChanged = (event) =>
  {
    setText(event.target.value);
  }

  const onSend = () =>{
    setLine(line => [...line, text]);
    setText("");
  }

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
          line.map(x=>{
            return <div className="App-chatroom-text">
          {x}
        </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"value={text} onChange={onTextChanged}/>
        <div className="App-textbox-send"onClick={onSend}>Send!</div>
      </div>
    </div>
  );
}

export default App;
