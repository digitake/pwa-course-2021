import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Calendar.css';
import App from './App';

function Calendar(){

  return (
    <App>
    <div className="Calendar">
      <div className="Calendar-header">
      <div className="Calendar-header1" >
        <Link className={"Calendar-header1"} to="/"/>
      </div>
      <div className="Calendar-header2" ></div>
      <div className="Calendar-header3" ></div>  
    </div>
      <div className ="Calendar-chatroom"></div>
      <div className = "Calendar-chatroom1"></div>
      <div className="Calendar-textbox">
        <div className="Calendar-textbox-send" >
          <Link className={"Calendar-textbox-send"} to="/home"/>
        </div>
        <div className="Calendar-textbox-send1" > </div>
        <div className="Calendar-textbox-send2" ></div>
        <div className="Calendar-textbox-send3" ></div>
        <div className="Calendar-textbox-send4" ></div>
      </div>
    </div>
    </App>
    
  );
  
}


export default Calendar;