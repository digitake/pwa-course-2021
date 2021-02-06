import logo from './lel.jpg';
import './App.css';
import{useState}from 'react'
function App() {

const [text, setText] = useState("aaaaaaaa")

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          Line1
        </div>
        <div className="App-chatroom-text">
          Line2
        </div>
        <div className="App-chatroom-text">
          Line3
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"/>
        <div className="App-textbox-send">Send!</div>
      </div>
    </div>
  );
}cc

export default App;
