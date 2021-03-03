import './ShopPage.css';
import { Link } from "react-router-dom";

// var name = "Sticker Name";
// document.getElementById("name").innerHTML = name;
// var descript = "This is description";
// document.getElementById("description").innerHTML = descript;

function ShopPage(){
    return(
        <div className="ShopPage">
            <div className="ShopPage-header">
                Sticker Shop
                <Link to="/friend-list">
                    <img src ="back-32.png" align= "Left" />
                </Link>
            </div>
            <div className="ShopPage-body">
                <div className="ShopPage-profile-sticker">
                    <div className=".ShopPage-profile-image">
                        
                    </div>
                    <div className=".ShopPage-profile-name-description">
                        name
                        <p id="name">Name</p>
                        <p id="description">Description</p>
                    </div>
                </div>
                <div className="ShopPage-details-zone">
                    <div className="ShopPage-details-sticker-header">
                    </div>
                    <div className="ShopPage-details-sticker">
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ShopPage;