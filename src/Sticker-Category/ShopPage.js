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
                    <div className="ShopPage-button1">
                        <Link to="/friend-list">
                        <img src ="back-32.png" align= "Left"/>
                        </Link>
                    </div>
                </div>

                <div className="ShopPage-Category">
                        <Link to ="/HotStickersList">
                        <button class="ShopPage-button">Hot!</button>
                        </Link>
                    
                        <Link to ="/NewStickersList">
                        <button class="ShopPage-button">New stickers</button>
                        </Link>
                   
                        <Link to ="/EffectStickersList">
                        <button class="ShopPage-button">Effect stickers</button>
                        </Link>
                   
                        <Link to="/AnimatedStickersList">
                        <button class="ShopPage-button">Animated stickers</button>
                        </Link>  
                    
                        <Link to ="/CuteStickersList">
                        <button class="ShopPage-button">Cute</button>
                        </Link>      
    
                        <Link to="/CoolStickersList">
                        <button class="ShopPage-button">Cool</button>
                        </Link>  

                        <Link to="/WarnAndFuzzyStickerList">
                        <button class="ShopPage-button">Warm&Fuzzy</button>
                        </Link> 
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