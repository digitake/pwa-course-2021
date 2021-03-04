import {Link} from "react-router-dom";
import React, { useState } from 'react';
import './LobbySetting.css';


function LobbySetting() {
    
    const [text,setText] = useState("");
    const [lines, setLines] = useState(["Welcome to my Lobby"]);

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const onSend = () => {
        setLines(line => [...lines,text]);
        setText("")
    }
   
    return (
        <div className="LoadingSetting col-12">
            <div className="LoadingSetting-header">
                <div className="LoadingSetting-profile-read-ju-on">
                </div>
                <div className="LoadingSetting-RoomName">
                    Room Ju-on
                </div>
                <div className="LoadingSetting-RoomID">
                    RID 123456
                </div>
                <div className="LoadingSetting-profile-read-tar">
                </div>
                <div className="LoadingSetting-profile-read-pruek">
                </div>
                <div className="LoadingSetting-profile-read-phai">
                </div>
            </div>
            <div className="LoadingSetting-chatroom">
                {
                    lines.map(x=>{
                        return <div className="LoadingSetting-chatroom-text">
                            {x}
                        </div>
                    })
                }
                <div className="Private">
                    Private Room
                </div>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round">
                    </span>
                </label>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round">
                    </span>
                </label>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round">
                    </span>
                </label>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round">
                    </span>
                </label>

            </div>
            <div className="LoadingSetting-textbox">
                <div className="LoadingSetting-Botton col-1">
                </div>
                <input type="text" placeholder="Type Ready to Start!" className="LoadingSetting-textbox-input col-10" value = {text} onChange={onTextChange}/>
                <div className="LoadingSetting-textbox-send col-2" onClick={onSend}>Send!</div>
            </div>
        </div>
    );
}
export default LobbySetting;