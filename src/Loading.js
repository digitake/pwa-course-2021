import { Link } from "react-router-dom";
import  loading  from "./Design/Loading.jpg";
import "./Loading.css";
function Loading(){
    return(
        <div className="loading">
            <Link to = "/">
                <img src={loading} width="480" height="852" alt = "Load"/>
            </Link>
        </div>
    )
};
export default Loading;