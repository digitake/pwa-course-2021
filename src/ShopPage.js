import './ShopPage.css';
import { Link } from "react-router-dom";
import App from './App';

// var name = "Sticker Name";
// document.getElementById("name").innerHTML = name;
// var descript = "This is description";
// document.getElementById("description").innerHTML = descript;

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