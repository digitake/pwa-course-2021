import React, { useState, useEffect } from 'react';
import './AppLogin.css'
import {Link} from 'react-router-dom'


function LoginPage() {

  const [text , setText] = useState("")

  const onTextChange = (event) => {
    setText(event.target.value);

  };


    return(

        <div className = "Login">

            <div className = "Undo">
             <Link to = "/">
                <img src = "Union.png"  alt = ""/>
             </Link>
            </div> 

            <div className="Logo">
                <img src = "icon-256x256.png" alt = ""/>
            </div>

            <div className="Login-text-bar">
            <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} placeholder="Username" />
            </div>

            <div className="Login-text-bar">
            <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} placeholder="Password" />
            </div>

            <div className = "SingIn" >
                <Link to = "/HomePage" >
                    <img src = "ButtonSingIn.png" alt = "" />
                </Link>
            </div>

        </div>
    )
}
export default LoginPage ;

