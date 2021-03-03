import './T.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function T() {
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
    <div className="T">
      <div className="T-header">
            <Link to="/friend" className="Button">
                <button>
                  Go To
                </button>
            </Link>
      </div>
      <div className="T-chatroom">
        {
          lines.map(x => {
            return <div className="T-chatroom-text">
                    {x}
                   </div>
          })
        }
      </div>
      <div className="T-textbox">
        <input type="T" className="T-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        
        <div className="T-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
  );
}

export default T;
