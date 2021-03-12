import React, { useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import Headerchat from './Headerchat';

function App() {

  const [text, setText] = useState("");
  const [lines, setLines] = useState(["Please Enter Your Massage",""]);

  const onChangeHandler = (event) => {
      setText(event.target.value);
  };

  const onSendHandler = (event) => {
    setLines(lines => [...lines, text]);
    setText("");
  };


  return (
    <Headerchat>
    <div className="App">
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
        <input type = "text" className = "App-textbox-input" onChange={onChangeHandler} value={text}/>
        <div className = "App-textbox-send" 
          onClick={onSendHandler}> 
        <div className = "App-textbox-send-pic">
          </div>
        </div>
      </div>


    </div>
    </Headerchat>
  );
}

export default App;
