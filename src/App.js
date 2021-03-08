import React, { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import {Children} from 'react';
import {Link} from 'react-router-dom';
=======
import {Link} from "react-router-dom";
>>>>>>> b9baf8cdc6fd18c15d1425436ab5f12b445e6faa


<<<<<<< HEAD
function App({children}) {

=======
const [text,setText] = useState("");

const [lines, setLines] = useState(["Tar : Hello guys!"]);



const onTextChange = (event) => {
    setText(event.target.value);
};

const onSend = () => {
  setLines(line => [...lines,"Me : " + text]);
    setText("")
}

    
>>>>>>> b9baf8cdc6fd18c15d1425436ab5f12b445e6faa

  return (
    <div className="App col-12">
      <div className="App-header">
<<<<<<< HEAD
      <Link to="/friend-list" className="App-header-button">
                <button>
                    Go Friend-list
                </button>
            </Link>
            <Link to="/support-list" className="App-header-button">
                <button>
                    Go support-list
                </button>
            </Link>
            <Link to="/chatbox" className="App-header-button">
                <button>
                    Go chatbox
                </button>
            </Link>
      </div>     
      <div className="App-content">
        {children}
=======
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
          <Link to="/LobbySetting">
              <div className="App-Botton col-1">
                  <img src="botton.png"/>
              </div>

          </Link>
        <input type="text" placeholder="Type Ready to Start!" className="App-textbox-input col-9" value = {text} onChange={onTextChange}/>
        <div className="App-textbox-send col-2" onClick={onSend}>Send!</div>
            
>>>>>>> b9baf8cdc6fd18c15d1425436ab5f12b445e6faa
      </div>
    </div>
  );
}

export default App;
