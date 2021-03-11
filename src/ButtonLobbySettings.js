import {Link} from "react-router-dom";
import './LobbySetting.css';


function ButtonLobbySetting({children}) {
    
    return (
        <div className="LoadingSetting">
            <div className="Private">
                <h1>Private Room</h1>
            </div>
            <div className="AllowHint">
                <h1>AllowHint</h1>
            </div>
            <div className="AllowJoin">
                <h1>Allow to Join between game</h1>
            </div>
            <div className="PlayerName">
                <h1>Show player's name</h1>
            </div>

            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round">
                </span>
                {children}
            </label>

            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round">
                </span>
                {children}
            </label>

            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round">
                </span>
                {children}
            </label>

            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round">
                </span>
            </label>
            {children}
        </div>
    );
}
export default ButtonLobbySetting;