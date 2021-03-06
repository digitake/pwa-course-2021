import './Chatbox.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

import {useState} from 'react';
=======
import {useState} from 'react';
import App from './App';

>>>>>>> 4e0f9f9ea88b939112c7a13ec25f9c90f7009a14


function Chatbox() {
  
<<<<<<< HEAD
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines, text]);
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };

  return (
    <div className="App">
      <div className="App-header">
      <div>
        <Link to="/">
            <img src="back"  alt="ย้อนกลับ"/>
        </Link>
        </div>
      </div>

      <div className ="panel-footer">
      </div>

      <div className ="input-group">
      </div>

=======
    const [text, setText] = useState("");
    const [lines, setLines] = useState([]);
  
    const onTextChange = (event) => {
      setText(event.target.value);
    };
  
    const onSend = () =>{
      setLines([...lines, text]);
      setText("");
    };
  
    const keyPress = (event) => {
      if (event.which === 13){
        onSend();
      }
    };
    
    

  return (
      <App>
        <div className="App col-6">
>>>>>>> 4e0f9f9ea88b939112c7a13ec25f9c90f7009a14
      <div className="App-chatroom">
        {
          lines.map(x => {
            return <div className="App-chatroom-text">
                    {x}
                   </div>
          })
        }
      </div>
<<<<<<< HEAD

      <div className="App-textbox">
        <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
      
    </div>
  );
}

// ctrl+alt+p to open command then run npm start to open localhost:300 

export default Chatbox;
=======
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
    </App>
    
  );
}



export default Chatbox;




  
>>>>>>> 4e0f9f9ea88b939112c7a13ec25f9c90f7009a14
