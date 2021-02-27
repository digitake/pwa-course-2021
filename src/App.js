
import './App.css';
import{useState}from 'react'


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
      <div className="App-header App-logo ">
        
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