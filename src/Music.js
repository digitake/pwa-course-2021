import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Music.css';
import App from './App';

function Music(){

  return (
    <App>
    <div className="Music">
      <div className="Music-header">
      <div className="Music-header1" >
        <Link className={"Music-header1"} to="/"/>
      </div>
      <div className="Music-header2" ></div>
      <div className="Music-header3" ></div>  
    </div>
      <div className ="Music-chatroom"></div>
      <div className = "Music-chatroom1"></div>
      <div className="Music-textbox">
        <div className="Music-textbox-send" >
          <Link className={"Music-textbox-send"} to="/home"/>
        </div>
        <div className="Music-textbox-send1" > </div>
        <div className="Music-textbox-send2" ></div>
        <div className="Music-textbox-send3" ></div>
        <div className="Music-textbox-send4" ></div>
      </div>
    </div>
    </App>
    
  );
  
}


export default Music;