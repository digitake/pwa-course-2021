import './Chatbox.css';
import {useState} from 'react';

function Chatbox() {
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

  );
}

export default Chatbox;
