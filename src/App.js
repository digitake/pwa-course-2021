
import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function App() {

  const [text, setText] = useState("");
  const [lines, setLines] = useState([""]);

  const onChangeHandler = (event) => {
      setText(event.target.value);
  };

  const onSendHandler = (event) => {
    setLines(lines => [...lines, text]);
    setText("");
  };

  return (
    <div className="App">
      <div className="App-header">
        <Link to="friend-list">
            <button>
                Friend List
            </button>
        </Link> 
      </div>
      <div className="App-chatroom">
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
        <div className="App-textbox-send" onClick={onSendHandler}>ส่ง!</div>

      </div>
    </div>
  );
}

export default App;
