import './ShopPage.css';
import { Link } from "react-router-dom";

// var name = "Sticker Name";
// document.getElementById("name").innerHTML = name;
// var descript = "This is description";
// document.getElementById("description").innerHTML = descript;

function ShopPage({children}){
    return(
        <div className="ShopPage">
            <div className="ShopPage-head">
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
                                Hot!
                        </Link>
                    </div>
                    <div className="ShopPage-button">
                        <Link to ="/NewStickersList">
                             New stickers
                        </Link>
                    </div>
                    <div className="ShopPage-button">
                        <Link to ="/EffectStickersList">
                        
                            Effect stickers
                        
                        </Link>
                    </div>
                    <div className="ShopPage-button">
                        <Link to="/AnimatedStickersList">
                        
                            Animated stickers
                        
                        </Link>  
                    </div>
                    <div className="ShopPage-button">
                        <Link to ="/CuteStickersList">
                        
                            Cute
                        
                        </Link>      
                    </div>
                    <div className="ShopPage-button">
                        <Link to="/CoolStickersList">

                        Cool

                        </Link>  
                    </div>
                    <div className="ShopPage-button">                        
                        <Link to="/WarnAndFuzzyStickerList">

                        Warm&Fuzzy

                        </Link> 
                    </div>
                </div>
            </div>
            <div className="ShopPage-body">
                <div className="ShopPage-body-content">
                    {children}
                </div>
            </div>
        </div>  
    );
};


export default ShopPage;