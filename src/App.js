import './App.css';
<<<<<<< HEAD
import { useState } from 'react';

function App() {

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
import {useState} from 'react';

function App() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines, text]);
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };
>>>>>>> bbb743eb72155c59d3401cd8bc428d1730447dee

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
<<<<<<< HEAD
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
>>>>>>> bbb743eb72155c59d3401cd8bc428d1730447dee
      </div>
    </div>
  );
}

export default App;
