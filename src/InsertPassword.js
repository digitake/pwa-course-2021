import { Link } from "react-router-dom";
import  insertPassword  from "./Design/InsertPassword.jpg";
import "./InsertPassword.css";
function InsertPass(){
    return(
        <div className="insertpassword">
            <Link to = "/">
                <img src={insertPassword} width="480" height="852" alt = "Insertpassword"/>
            </Link>
        </div>
    )
};
export default InsertPass;