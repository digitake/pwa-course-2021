import './ShopPage.css';
import { Link } from "react-router-dom";
import App from './App';

function ShopPage(){
    return(
        <App>
        <div className="BackButton">
            <Link to="/">
            <button>
                Back
            </button>
             </Link>
        </div>
        </App>
          
    );
};

export default ShopPage;