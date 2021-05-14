import { Link } from "react-router-dom";
import './Menu.css';
import{useState}from 'react'
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

function Menu(){
    return(
        <div className="col-6 col-s-9 Menu">
            <div className="Menu-header">
                <div className="Menu-Back-Button">
                    Menu
                <Link to = "/">
                <img src= "Back-32.png" align ="left"/>
                </Link>
                </div>
            </div>
            <div className="col-3 col-s-3 Menu-box">
                <div className=" Menu-column">
                <div className=" Menu-row">
                    <Link to = "/MangoSetting">
                    <button>
                        <img src="mango-192.png" width="150px" height = "150px" class ="responsive"/>
                        <div className = "SettingName">
                        <h3>Mango setting</h3>
                        </div>
                    </button>
                    </Link>
                    <Link to = "/AccountSetting">
                    <button>
                        <img src="mango-192.png" width="150px" height = "150px" class ="responsive"/>
                        <div className = "SettingName">
                        <h3>Account setting</h3>
                        </div>
                    </button>
                    </Link>
                    <Link to ="/FriendSetting">
                    <button>
                        <img src="mango-192.png" width="150px" height = "150px" class ="responsive"/>
                        <div className = "SettingName">
                        <h3>Friend setting</h3>
                        </div>
                    </button>
                    </Link>
                </div>
                <div className="Menu-row">
                    <Link to ="/AdvanceSetting">
                    <button>
                        <img src="mango-192.png" width="150px" height = "150px" class ="responsive"/>
                        <div className = "SettingName">
                        <h3>Advance setting</h3>
                        </div>
                    </button>
                    </Link>
                    <Link to ="NotificationSetting">
                    <button>
                        <img src="mango-192.png" width="150px" height = "150px" class ="responsive"/>
                        <div className = "SettingName">
                        <h3>Notification Setting </h3>
                        </div>
                    </button>
                    </Link>
                    <Link to = "GameSetting">
                    <button>
                        <img src="mango-192.png" width="150px" height = "150px" class ="responsive"/>
                        <div className = "SettingName">
                        <h3>Game setting </h3>
                        </div>
                    </button>
                    </Link>
                </div>
                </div>
            </div> 
        </div>
          
    );
};


export default Menu;