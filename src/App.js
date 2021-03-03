
import './App.css';
import{useState}from 'react'
import {Link} from 'react-router-dom'


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
    <div className="App col-6">
      <div className="App-header">
      <Link to="/friend-list">
          <button>
            Back
          </button>
        </Link>
        <div className="App-logo">
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
      <div className="App-send-zone">
      <div className="App-textbox-Name" onClick ={onSend} >Name</div>
        <div className="App-textbox">
          
          <input type="text" className="App-textbox-input" value ={text} onChange= {onTextChange}/>
          
        </div>
      <div className="App-textbox-Sticker" onClick ={onSend} >Sticker</div>
      <div className="App-textbox-send" onClick ={onSend} >Send </div>
      
      
      </div>

    </div>
  );
}

export default App;