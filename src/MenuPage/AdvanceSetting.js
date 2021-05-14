import { Link } from "react-router-dom";
import './AdvanceSetting.css';
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

function AdvanceSetting(){
    return(
        <div className="col-6 col-s-9 Menu">
            <div className="Menu-header">
                <div className="Menu-Back-Button">
                    AdvanceSetting
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


export default AdvanceSetting;