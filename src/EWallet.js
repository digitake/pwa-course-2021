import { Link } from 'react-router-dom';
import { useState } from 'react';
import './EWallet.css';
import App from'./App';

function EWallet() {

  return (
    <App>
    <div className="EWallet">
      <div className="EWallet-header">

      <div className="EWallet-header1" ></div>
      <div className="EWallet-header2" >
      <Link className={"EWallet-header2"} to="/home"/>
      </div>
      <div className="EWallet-header3" ></div>  

      </div>
    
      <div className="EWallet-bg">
      <div className="EWallet-chatroom-text" > </div> 
      </div>

      <div className="EWallet-textbox">
        
        <div className="EWallet-textbox-send" ></div>
        <div className="EWallet-textbox-send1" ></div>
        <div className="EWallet-textbox-send2" ></div>
        
      </div>
      <div className="Menu-1">
        </div>
    </div>
    </App>
  );
}

export default EWallet;
