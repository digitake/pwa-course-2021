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
      
      <HeaderLayout>
      <p className = "noelly">noel</p>
        <div className="circlesbox1">
          <Link to='/Profile'>
              <img src="/Project/Prochatroom/5.jpg" alt="/Project/Prochatroom/5.jpg" width="50px" height="50px"/>
          </Link> 
        </div>
        <div className="imp">
          <Link to='/Profriend'>
              <img src="/Project/Prochatroom/333.jpg" alt = "/Project/Prochatroom/333.jpg" width="50px" height="50px"/>
          </Link>
        </div>
        <div className="imp2">
          <img src= "/Project/Prochatroom/5555.jpg" alt ="/Project/Prochatroom/5555.jpg" width="60px" height="60px" />
        </div>
        <HeaderLayout>
      <div className="chatroom">
        {
          lines.map(x =>{
          return <div className="chatroom-text">
                 {x}
               </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}/>
        <div className="App-textbox-send"onClick={onSend}><img src= "/Project/Prochatroom/send.png" alt = "/Project/Prochatroom/send.png" width="70px" height="70px"/></div>
      </div>
    </div>
  );
}

export default ProChatroom;
