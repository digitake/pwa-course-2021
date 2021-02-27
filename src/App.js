
import React, { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom';


=======
import  { Link } from 'react-router-dom';
>>>>>>> 0923fd631a25ac73b8d2474bc8b1fc67e591e23c
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
<<<<<<< HEAD
        <Link to="friend-list">
            <button>
                Friend List
            </button>
        </Link> 
=======
        <div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">Dropdown</button>
          <div id="myDropdown" class="dropdown-content">
            
         <a href="#"><Link to="/friend-list"> </Link></a>
         <a href="#">Link 2</a>
         <a href="#">Link 3</a>
          </div>
        </div>
>>>>>>> 0923fd631a25ac73b8d2474bc8b1fc67e591e23c
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
