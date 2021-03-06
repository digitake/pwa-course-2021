import './Chatbox.css';
import {Link} from 'react-router-dom';
import{useState}from 'react';
import './App.css';
import App from './App';

function Chatbox(){

    const [text, setText] = useState("")
    const [lines, setLines] = useState([""]);


    const onTextChange = (event) => {
  setText(event.target.value);
        }
    const onSend = (event) =>{
    setLines(lines => [...lines, text]);
    setText("");
    }
  return(
      <App>
    <div className="Chatbox">

      <div className="Chatbox-chatroom">
        {
          lines.map(x =>{
        return <div className="Chatbox-chatroom-text">
           {x}
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
