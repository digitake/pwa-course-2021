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
                <div className="SopPage-button">
                    <Link to="/friend-list">
                    <img src ="back-32.png" align= "Left" />
                </Link>
                </div>
            </div>
            <div className="ShopPage-Category">
                <div className="ShopPage-button">
                    <Link to ="/HotStickersList">
                        <bottle>
                            Hot!
                        </bottle>
                    </Link>
                </div>
                <div className="ShopPage-button">
                    <Link to ="/NewStickersList">
                        <bottle>
                            New stickers
                        </bottle>
                    </Link>
                </div>
                <div className="ShopPage-button">
                    <Link to ="/EffectStickersList">
                        <bottle>
                            Effect stickers
                        </bottle>
                    </Link>
                </div>
                <div className="ShopPage-button">
                    <Link to="/AnimatedStickersList">
                        <bottle>
                            Animated stickers
                        </bottle>
                    </Link>  
                </div>
                <div className="ShopPage-button">
                    <bottle>
                        Cute
                    </bottle>
                </div>
                <div className="ShopPage-button">
                    <bottle>
                        Cool
                    </bottle>
                </div>
                <div className="ShopPage-button">                        
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