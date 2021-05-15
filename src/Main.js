import './Main.css';
import App from './App';
import { Link } from 'react-router-dom';


function Main(){
    return(
        <App>
            <div>
                <p></p>
                
                <div className="header">    
                   <p1>CHEN WICK</p1> 
                    <Link to="friendlist">
                        <img src="เณรเชน.jpg"width= "30%" height="100%" align="right"/> 
                    </Link>
                </div>
                <p></p>
                
                <input type="text" placeholder="Search.." name="search2"></input>

                <p></p>
                <div className="friendlistcontent">
                    friendlist
                <div className="friendlistbox">
                    <img src="mark.png" width="50px"/>
                    MARK
                </div>
                
                <div className="friendlistbox">
                    <img src="mon.png"/>
                    MON
                </div> 
                
                <div className="friendlistbox">
                    <img src="tin.png"/>
                    TIN
                </div>
                
                <div className="friendlistbox">
                    <img src="dome.png"/>
                    DOME
                </div>

                </div>
                
                <p></p>
                <div className="bottom">
                    News
                </div>                     
                
    
                       
            </div>
        </App>
    )
}

export default Main;