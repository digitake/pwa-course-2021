
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
        <div className="Friend-Button">
             <Link to = "/friend-list">
              <img src= "Back-32.png"/>
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
<button id="myBtn">Open Sticker</button>

<div id="myModal" class="modal">

  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Stickers</p>
  </div>

</div>
     </div>
     
    );
}


export default App;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}