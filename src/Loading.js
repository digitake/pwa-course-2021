import { Link } from "react-router-dom";
import  loading  from "./Loading.jpg";
function Loading(){
    return(
        <div>
            <Link to = "/">
                <img src={loading} alt = "Load"/>
            </Link>
        </div>
    )
};
export default Loading;