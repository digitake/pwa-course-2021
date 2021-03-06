import './Chatbox.css';
import{useState}from 'react'
import App from './App';
import {Link} from 'react-router-dom';

function Chatbox() 
{

const [text, setText] = useState("")
const [lines, setLines] = useState([""]);


const onTextChange = (event) => {
  setText(event.target.value);
}
const onSend = (event) =>{
  setLines(lines => [...lines, text]);
  setText("");
}
  return (
 <App>
    <div className="App">
       <div className="Shop-Button">
             <Link to = "/shop-page">
               <button>
                 Shop
               </button>
             </Link>
      </div>
      <div className="Profile-Button">
             <Link to = "/profile-page">
               <button>
                 Profile
               </button>
             </Link>
      </div>
       <div className="Game-Button">
             <Link to = "/game-page">
               <button>
                 Game
               </button>
             </Link> 
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
    <div className="App-textbox ">
        <input type="text" className="App-textbox-input" value ={text} onChange= {onTextChange}/>
     <div className="App-textbox-send " onClick ={onSend}>Send!</div>
     </div>
         <button id="myBtn">Open Sticker</button>
     <div id="myModal" class="modal">
     <div class="modal-content">
         <span class="close">&times;</span>
        <p>Stickers</p>
     </div>
    </div>
  </div> 
</App>   
    );
}

export default Chatbox;
