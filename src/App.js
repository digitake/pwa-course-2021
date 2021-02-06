import React, { useState } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

<<<<<<< HEAD
  const [text, setText] = useState("")

  const [lines, setLines] = useState(["msg1"]); 

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    setLines(Lines => [...Lines, text]);
=======
  const [text, setText] = useState("");
  const [lines, setLines] = useState(["Hello world!"]);

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onSendHandler = (event) => {
    setLines(lines => [...lines, text]);
>>>>>>> 3bd140ff70dd92caa163e04b2042c7ae0753d4b4
    setText("");
  };

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
<<<<<<< HEAD
        {
          lines.map(x=>{
          return <div className="App-chatroom-text">
            {x}
          </div>
          })
        }   
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
=======
      {
          lines.map((value, index) => {
            return <div key={index} className="App-chatroom-text">
                {value}
                </div>
          })
        }
      </div>
      <div className="App-textbox">
      <input type="text" className="App-textbox-input" onChange={onChangeHandler} value={text}/>
      <div className="App-textbox-send" onClick={onSendHandler}>Send!</div>
      </div>
>>>>>>> 3bd140ff70dd92caa163e04b2042c7ae0753d4b4
      </div>
  );
      }

      export default App;

