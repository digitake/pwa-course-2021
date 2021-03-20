import './Chatbox.css';
import { useEffect, useState } from 'react';
import App from './App'

function Chatbox() {

    const [text, setText] = useState("");
    const [lines, setLines] = useState([]);

    /*useEffect(() => {
      alert("Total Chat Text= "+ lines.length)
    }, [lines]);*/
  
    const onTextChange = (event) =>{
      setText(event.target.value)
    };
  
    const keyPress = (event) => {
      if (event.which === 13){
        onSend();
      }
    };
  
  const onSend = () => {
    setLines(lines => [...lines, {
      Sender:"Me",
      Message: text}])
    setText("");
  }

  return (
    <App>
            <div className = "App-chatroom">
                {
                lines.map(x => {
                return <div className="App-chatroom-text">
                       <div>
                         {x.Sender+": "}
                       </div>
                       <div>
                        {x.Message}
                       </div>
                  </div>
                })
                }
            </div>

            <div className="App-textbox">
            <input type="text" className="App-textbox-input" 
            value={text} onChange={onTextChange} onKeyPress={keyPress}/>

            <div className="App-textbox-send" onClick={onSend}>Send!</div>

            </div>
        
    </App>
  );
}
export default Chatbox;