import { useState } from 'react';
import './ProChatroom.css';
import { Link } from "react-router-dom";


function ProChatroom() {

const [text,setText] = useState("")

const [lines,setLines] = useState([""]);

const onTextChange = (event)=>{
  setText(event.target.value);
};

const onSend = () => {
  setLines(lines => [...lines,text]);
  setText("");
};
return (
  
    <div className="App">
      <p className = "noelly">noel</p>
      <div className="App-header">
      <div className="circlesbox1">
        <Link to='/ProProfile'>
          <button>
            <img src="5.jpg" width="50px" height="50px"/>
          </button>
        </Link> 
       </div>
       <div className="imp">
        <Link to='/ProProfile'>
          <button>
            <img src="333.jpg" width="50px" height="50px"/>
          </button>
        </Link>
       </div>
       <div className="imp2"><img src= "5555.jpg"width="60px" height="60px" /></div>
      </div>
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
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}/>
        <div className="App-textbox-send"onClick={onSend}><img src= "send.png" alt = "send.png" width="70px" height="70px"/></div>
      </div>
    </div>
  );
}

export default ProChatroom;
