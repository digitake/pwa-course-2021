import './LoadingBar.css';
import Eye_LoadingScene from "./Eye_LoadingScene";
function LoadingBar(){
    return(
        <Eye_LoadingScene>
        <div className="LoadBox">
            <div className="LoadBar"></div>
        </div>
        </Eye_LoadingScene>
    );
};

export default LoadingBar;

