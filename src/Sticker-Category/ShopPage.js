import './ShopPage.css';
import { Link } from "react-router-dom";

// var name = "Sticker Name";
// document.getElementById("name").innerHTML = name;
// var descript = "This is description";
// document.getElementById("description").innerHTML = descript;

function ShopPage({children}){
    return(
        
        <div className="ShopPage">
            <div className="ShopPage-header">
                Sticker Shop
                <div className="SopPage-bottle">
                    <Link to="/friend-list">
                    <img src ="back-32.png" align= "Left" />
                </Link>
                </div>
            </div>
            <div className="ShopPage-Category">
                <div className="ShopPage-bottle">
                    <Link to ="/HotStickersList">
                        <bottle>
                            Hot!
                        </bottle>
                    </Link>
                </div>
                <div className="ShopPage-bottle">
                    <bottle>
                        New stickers
                    </bottle>
                </div>
                <div className="ShopPage-bottle">
                    <bottle>
                        Effect stickers
                    </bottle>
                </div>
                <div className="ShopPage-bottle">
                    <bottle>
                        Animated stickers
                    </bottle>
                </div>
                <div className="ShopPage-bottle">
                    <bottle>
                        Cute
                    </bottle>
                </div>
                <div className="ShopPage-bottle">
                    <bottle>
                        Cool
                    </bottle>
                </div>
                <div className="ShopPage-bottle">                        
                <bottle>
                    Warm & Fuzzy
                </bottle>
                </div>
            </div>
            <div className="ShopPage-body">
                {children}
            </div>
        </div>   
    );
};


export default ShopPage;