import { useState } from 'react';
import './ProChatroom.css';
import { Link } from 'react-router-dom';


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
    <div className="header">
       <div className="noelly">noel</div> 
      <div className="noelphoto">
        <Link to='/ProProfile'>
            <img src="Logo noel.jpg" width="50px" height="50px"/>
        </Link>
       </div>
       <div className="imp">
        <Link to=''>
            <img src="333.jpg" width="50px" height="50px"/>
        </Link>
       </div>
       <div className="imp2"><img src= "5555.jpg"width="50px" height="50px" /></div>
      </div>
      <div className="chatroom">
        {
          lines.map(x =>{
          return <div className="chatroom-text">
                 {x}
               </div>
          })
        }
      </div>
      <div className="textbox">
        <input type="text" className="textbox-input" value={text} onChange={onTextChange}/>
        <div className="textbox-send"onClick={onSend}><img src= "send.png" alt = "send.png" width="70px" height="70px"/></div>
      </div>
    </div>
  );
}

export default ProChatroom;
