import './App.css';

=======
import{useState}from 'react'

function App() 
{

const [text, setText] = useState("")

const [lines, setLines] = useState(["Let's Talk!"]);

const onTextChange = (event) => {
  setText(event.target.value);
}

const onSend = (event) =>{
  setLines(lines => [...lines, text]);
  setText("");
}


  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {

          lines.map((value, index) =>{
            return <div key={index} className="App-chatroom-text">
                     {value}
                   </div>

          })
        }

      </div>
      <div className="App-textbox">

        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} value={text}/>

        <div className="App-textbox-send" onClick ={onSend}>Send!</div>
      </div>
    </div>
  );
}

export default App;
