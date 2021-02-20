import React, { useState } from 'react';
import './App.css';
import {useState} from 'react';
<<<<<<< HEAD


function App() {

  const [text, setText] = useState("")

  const [lines, setLines] = useState(["msg1" , "msg2" , "msg3" , "msg4" , "msg5"]);

=======

function App() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
>>>>>>> bbb743eb72155c59d3401cd8bc428d1730447dee
  const onTextChange = (event) => {
    setText(event.target.value);
  };

<<<<<<< HEAD
  const onSend = () => {
    setLines(lines => [...lines, text]);
    setText("");
  };

=======
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
        Chater
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
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}/>
=======
        {
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
        
>>>>>>> bbb743eb72155c59d3401cd8bc428d1730447dee
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
    
  );
}

export default App;
