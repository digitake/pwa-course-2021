import { Link } from 'react-router-dom';
import './Chatbox.css';
import { useState } from 'react';
import LinkTo from './Components/LinkManager';

function Chatbox() {

  const [text, setText] = useState('');
  const [lines, setLines] = useState([]);

  const onSend = () => {
    if (text.length < 1) return;
    setLines([...lines, text]);
    setText("");
  }

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.which === 13) {
      onSend();
    }
  }

  return (
    <div className="App">
      <div className="App-navigator">
        <LinkTo value='Welcome' to='/loading' />
        <LinkTo value='Insert Password' to='/insert-password' />
        <LinkTo value='Register' to='/register' />
        <LinkTo value='Login' to='/login' />
        <LinkTo value='Feed' to='/feed' />
        <LinkTo value='Settings' to='/settings' />
        <LinkTo value='Profile Setting' to='/profile-setting' />
        <LinkTo value='Insepect Profile' to='/insepect-profile' />
      </div>
      <div className="App-header">
        Neptune Chat
      </div>
      <div className="App-chatroom">
        {
          lines.map(msg => {
            return <div key={msg} className="App-chatroom-text">
              {msg}
            </div>
          })
        }

      </div>
      <div className="App-textbox">
        <input placeholder='Type something...' type="text" className="App-textbox-input" value={text} onKeyPress={onKeyPress} onChange={onTextChange} />
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
  );
}

export default Chatbox;
