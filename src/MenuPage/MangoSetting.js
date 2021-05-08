import { Link } from "react-router-dom";
import './MangoSetting.css';
import{useState}from 'react'
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

function MangoSetting(){
    return(
        <div className="col-6 col-s-9 Menu">
            <div className="Menu-header">
                <div className ="space-box">
                </div>
                <div className="Menu-Back-Button">
                    MangoSetting
                <Link to = "/menu">
                <img src= "Back-32.png" align ="left"/>
                </Link>
                </div>
            </div>    
            <div className="Menu-box">
            </div> 
        </div>
          
    );
};


export default MangoSetting;