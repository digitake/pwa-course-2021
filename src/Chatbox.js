
import './Chatbox.css'
import {useState} from 'react'
import{Link} from 'react-router-dom'
function Chatbox() {

  const [text,setText] = useState("");
  const [lines,setLines] = useState(["","","",""]);
  const onTextChange = (event) => {
    setText(event.target.value);
  };
  const onSend =() =>{
    setLines([...lines, text])
    setText("");
  };
  const keyPress = (event) =>  {
    if(event.which===13){
      onSend();
    }
  }
  return (
    <div className="App">
      <div className="App-header">
        Cat Chat
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          Hello Welcome!!
        </div>
        <div className="App-chatroom-text">
          ( This is a cat chat ) 
        </div>
        <div className="App-chatroom-text">
          Only cat can chat it 
        </div>
        <div className="App-chatroom-text">
          Good Luck Meaow ^^ 
        </div>
        <div className="App-chatroom-text">
          {
          lines.map(x => {
          return <div className="App-chatroom-text">
                  {x}
                  </div>
                        }
                    )      
          }  
        </div>
      </div>
      <Link to="/">
        <div className="App-chatroom">
      <div className="Goto-Friend">
          Go to Home
        </div>
        </div>
            </Link>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>
          ส่ง
          </div>
      </div>
    </div>
  );
}

export default  Chatbox;
