import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

function NeptuneChat() {

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

            <div className="App-header">
                <Link to='home'>
                    Neptune Chat
                </Link>

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
            <div>
            </div>
        </div>
    );
}

export default NeptuneChat;
