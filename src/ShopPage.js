import { Link } from "react-router-dom";

function ShopPage(){
    return(
        <div className="BackButton">
            <Link to="/">
            <button>
                Back
            </button>
             </Link>
        </div>
          
    );
};

export default ShopPage;