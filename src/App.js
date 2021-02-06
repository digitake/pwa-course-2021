import React, { useState } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

<<<<<<< HEAD
    const [text,setText] = useState("");

    const [lines,setLines] = useState(["msg1"]);

    const onTextChange = (event) => {
      setText(event.target.value);
    };

    const onSend =() => {
      setLines(lines => [...lines,text]);
      setText("");
    };
=======
  const [text, setText] = useState("");
  const [lines, setLines] = useState(["msg1!"]);

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onSendHandler = (event) => {
    setLines(lines => [...lines, text]);
    setText("");
  };
>>>>>>> e3a7503bf0c1023866dc3a25751ed4c34fb58425

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
<<<<<<< HEAD
        {
          lines.map(x =>{
           return <div className="App-chatroom-text">
                      {x}
                  </div>
          })
        } 
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value = {text} onChange={onTextChange} />
        <div className="App-textbox-send" onClick = {onSend}>Send!</div>
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
>>>>>>> e3a7503bf0c1023866dc3a25751ed4c34fb58425
      </div>
  );

}

export default App;
