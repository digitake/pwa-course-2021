import {Link} from "react-router-dom";
import './EnterApp_3ofghost.css';


function LoadingScene_EnterApp(){
    return(
        <div className="App col-12">   
            <div className="BG">
                <div className="Text_3ofghost">
                    <h1>3ofGhost</h1>
                    <h4>Present</h4>
                </div>
            </div>
            <Link to="/Eye_Scene">
                <div className="DelayTime"></div>
            </Link>
        </div>
    );
};

export default LoadingScene_EnterApp;