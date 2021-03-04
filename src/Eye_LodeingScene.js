import {Link} from "react-router-dom";
import './Eye_LoadingScene.css';

function Eye_LoadingScene(){
    return(
        <div className="App col-12">
            <div className="EyeBG">
                <div className="Text_Fantasma">Fantasma</div>
                <div className="LoadBox">
                    <div className="LoadBar"></div>
                </div>
            </div>
        </div>
    );
};

export default Eye_LoadingScene;