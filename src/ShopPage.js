import { Link } from "react-router-dom";

function ShopPage(){
    return(
        <div>
            Shop Page
            <Link to="/">
              <button>
                  Back
               </button>
            </Link>
        </div>

    );
};

export default ShopPage;