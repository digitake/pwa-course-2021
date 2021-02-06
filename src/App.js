import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("");

  const[Lines, setLines] = useState(["msg1", "msg2"]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines(lines =>[...lines, text]);
    setText("");
  };

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
          Lines.map(x =>{
              return <div className="App-chatroom-text">
                {x}
                </div>
          }

          )
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
  );
}

export default App;
