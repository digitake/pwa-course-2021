import './Chatbox.css';
import {useState , useEffect} from 'react';
import App from './App';


function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    alert("Total lines = " + lines.length);
  }, [lines]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines ,{sender: "Me" , message: text , timestamp: (new Date()) }]);

    setText("");
  };

  const keyPress = (event) => {

    console.log("hello");
    if (event.which === 13){
      onSend();
    }
  };

  return (
    <App>
    <div className="App">
      
      
      <div className="Chatbox-chatroom">
        
        {
          lines.map(x => {
            return <div className="Chatbox-chatroom-text">
              <div className = "Chatbox-chatroom-sender">
              {x.sender+ ": "}
              </div>

              <div className = "Chatbox-chatroom-message">
              {x.message}
              </div>
              
              </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"
         value = {text} onChange={onTextChange} onKeyPress = {keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
    </App>
  );
}

export default Chatbox;