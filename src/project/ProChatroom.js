import { useState } from 'react';
import './ProChatroom.css';
import BGChatroom from './BGChatroom';


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

    <div className="mainchatroom">
      <p className = "noelly"></p>
      <BGChatroom/>
      <div className="BG-Chatroom">
        {
          lines.map(x =>{
          return <div className="Chatroom-text">
                 {x}
               </div>
          })
        }
      </div>
      <div className="textbox">
        <input type="text" className="textbox-input" value={text} onChange={onTextChange}/>
        <div className="textbox-send"onClick={onSend}><img src= "/Project/Prochatroom/send.png" alt = "/Project/Prochatroom/send.png" width="70px" height="70px"/></div>
      </div>
    </div>
  );
}

export default ProChatroom;