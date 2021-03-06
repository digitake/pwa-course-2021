import './Chatbox.css';
import {useState} from 'react';
import { Link } from 'react-router-dom'


function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines , text]);

    setText("");
  };

  const keyPress = (event) => {

    console.log("hello");
    if (event.which === 13){
      onSend();
    }
  };

  return (
    <div className="App">
      
      <div className="App-header">

      <Link to = "/friend-list">
                
                <button>
                    Go to friendlist
                </button>
      </Link>

      <Link to = "/profile">
                
                <button>
                    Go to profile
                </button>
      </Link>
        
      <div className="App-chatroom2">

          GI472 <br></br> Varinkarn Kumtanasan <br></br> Pheeraphat Chocokviriyapanya <br></br>Tunwarat Kaewphang <br></br> Nattida Mee-nguen
        
        </div>
      </div>
      <div className="App-chatroom">
        
        {
          lines.map(x => {
            return <div className="App-chatroom-text">

              {x}
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
  );
}

export default Chatbox;