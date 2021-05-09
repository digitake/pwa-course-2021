import { Link } from 'react-router-dom';
import { useState } from 'react';
import './EWallet.css';
import App from'./App';

function EWallet() {

  return (
    <App>
    <div className="EWallet">
      <div className="EWallet-header">

      <div className="EWallet-header1" >
      <Link className={"EWallet-header1"} to="/"/>
      </div>
      <div className="EWallet-header2" ></div>
      <div className="EWallet-header3" ></div>  

      </div>
    
      <div className="EWallet-content">
        <div className="EWallet-money" > </div>
        <div className="EWallet-Menu" >
          <div className="EWallet-Menu1" >
            <div className="EWallet-Menu-inside" >
             <div className="EWallet-Menu-inside1" >
               <div className="EWallet-Button1" ></div>
               <div className="EWallet-Button2" ></div>
               <div className="EWallet-Button3" ></div>
             </div>
             <div className="EWallet-Menu-inside2" >
               <div className="EWallet-Button4" ></div>
               <div className="EWallet-Button5" ></div>
               <div className="EWallet-Button6" ></div>
             </div>
            </div>
          </div>
          <div className="EWallet-Menu2" >
          </div>
        </div>
      </div>
    </div>
    </App>
  );
}

export default EWallet;
