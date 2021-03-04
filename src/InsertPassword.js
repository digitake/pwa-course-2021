import { Link } from "react-router-dom";
import  insertPassword  from "./design/InsertPassword.jpg";
import "./InsertPassword.css";
function InsertPass(){
    return(
        <div className="insertpassword">
            <Link to = "/home">
                <img src={insertPassword} width="480" height="852" alt = "Insertpassword"/>
            </Link>
        </div>
    )
};
export default InsertPass;