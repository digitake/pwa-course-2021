import './ShopPage.css';
import { Link } from "react-router-dom";

// var name = "Sticker Name";
// document.getElementById("name").innerHTML = name;
// var descript = "This is description";
// document.getElementById("description").innerHTML = descript;

function ShopPage(){
    return(
<<<<<<< HEAD
        <div className="BackButton">
            <Link to="/">
            <button>
                Back
            </button>
             </Link>
        </div>
          
=======
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
                        <div className ="Profile-image">
                            <img src="Profile.png" align="Bottom" />
                        </div>
                    </div>
                    <div className=".ShopPage-profile-name-description">
                        <div className=".Profile-name">
                            <p id="name">Name</p>
                        </div>
                        <div className=".Profile-description">
                            <p id="description">Description</p>
                        </div>
                    </div>
                </div>
                <div className="ShopPage-details-zone">
                    <div className="ShopPage-details-sticker-header">
                    </div>
                    <div className="ShopPage-details-sticker">
                        <div className=".ShopPage-details-sticker-row">
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                        </div>
                        <div className=".ShopPage-details-sticker-row">
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                        </div>
                        <div className=".ShopPage-details-sticker-row">
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
>>>>>>> d48959107dc773950f219abbd3b5b70cd21ee2b7
    );
};


export default ShopPage;