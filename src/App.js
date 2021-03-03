
import './App.css';
import{useState}from 'react'
import {Link} from 'react-router-dom';

function App() 
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
      <div className="App-header App-logo ">
        <div className="Friend-Button Menu-Button">
             <Link to = "/friend-list">
              <img src= "Back-32.png"/>
             </Link>
             <Link to ="/menu">
             <img src= "setting32.png" align ="right"/> 
             </Link>
        </div>
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
     </div>
    );
}


export default App;