import React, {useState} from 'react';
import './ChatBox.css';
import {Link} from "react-router-dom";
import LobbyHeader from "./LobbyHeader";

function ChatBox() {

    const [text, setText] = useState("");

    const [lines, setLines] = useState(["Tar : Hello guys!"]);

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const onSend = () => {
        setLines(line => [...lines, "Me : " + text]);
        setText("")
    }

    return (
        <LobbyHeader>
            <div className="App col-12">
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
                    <Link to="/LobbySetting">
                        <div className="App-Botton col-1">
                            <img src="botton.png"/>
                        </div>
                    </Link>
                    <input type="text" placeholder="Type Ready to Start!" className="App-textbox-input col-9"
                           value={text}
                           onChange={onTextChange}/>
                    <div className="App-textbox-send col-2" onClick={onSend}>Send!</div>
                </div>
            </div>
        </LobbyHeader>
    );
}

export default ChatBox;
