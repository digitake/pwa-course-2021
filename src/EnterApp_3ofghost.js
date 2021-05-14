import {Link} from "react-router-dom";
import './EnterApp_3ofghost.css';


function LoadingScene_EnterApp(){
    return(
        <Link to="/Eye_Scene">
        <div className="App col-12">   
            <div className="BG">
                <div className="Text_3ofghost">
                    <h1>3ofGhost</h1>
                    <h4>Present</h4>
                </div>
            </div>
        </div>
        </Link>
    );
};

// Message form 1620701795 Give Me A SenPai
export default LoadingScene_EnterApp;