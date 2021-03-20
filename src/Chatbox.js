import './Chatbox.css';
import {Link} from 'react-router-dom';
import{useState, useEffect}from 'react';
import './App.css';
import App from './App';

function Chatbox(){

    const [text, setText] = useState("")
    const [lines, setLines] = useState([""]);

    useEffect(() => {
      alert("Total test Chat = " + lines.length)
    } ,[lines])
    const onTextChange = (event) => {
  setText(event.target.value);
        }
    const onSend = (event) =>{
    setLines(lines => [...lines, {
      sender: "Me",
      message: text.length,
      timestamp: (new Date())
    }]);
    setText("");
    }
  return(
      <App>
    <div className="Chatbox">
      
      <div className="Chatbox-chatroom">
        {
          lines.map(x =>{
          return <div className="Chatbox-chatroom-text">
           <div>
           {x.sender+ ": "}
           {x.message+ " "}
           {x.timestamp.toLocaleDateString()}
           </div>
          </div>
          })
        }
      </div>
      <div className="Chatbox-textbox ">
        <input type="text" className="Chatbox-textbox-input" value ={text} onChange= {onTextChange}/>

        <div className="Chatbox-textbox-send " onClick ={onSend}>Send!</div>

      </div>
    </div>
    </App>
    );
};

export default Chatbox;
