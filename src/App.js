import React, { useState } from 'react';
import './App.css';
import {Link} from "react-router-dom";

function App() {

const [text,setText] = useState("");

const [lines, setLines] = useState(["Tar : Hello guys!"]);



const onTextChange = (event) => {
    setText(event.target.value);
};

const onSend = () => {
  setLines(line => [...lines,"Me : " + text]);
    setText("")
}

    

  return (
    <div className="App col-12">
      <div className="App-header">
          <div className="profile-read-ju-on"></div>
          <div className="RoomName">
              <h1>Room Ju-on</h1>
              <h6>RID 123456</h6>
          </div>
          <Link to="/Profile_Tar">
          <div className="profile-read-tar"></div>
          </Link>
          <div className="profile-read-pruek"></div>
          <div className="profile-read-phai"></div>
          <div className="Chat-header"></div>
          </div>
      <div className="App-chatroom">
        {
          lines.map(x=>{
          return <div className="App-chatroom-text">
              {x}
          </div>
          })
        }

      </div>
      <div className="App-textbox">
          <div className="App-Botton col-1"></div>
        <input type="text" placeholder="Type Ready to Start!" className="App-textbox-input col-9" value = {text} onChange={onTextChange}/>
        <div className="App-textbox-send col-2" onClick={onSend}>Send!</div>
            
      </div>
    </div>
  );
}

export default App;
