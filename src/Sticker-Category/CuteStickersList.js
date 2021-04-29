import './HotStickersList.css'
import ShopPage from "./ShopPage";
import { Link } from "react-router-dom";

function CuteStickersList(){
    return(
    <ShopPage>
        <div className="StickerList">
            <Link to ="/Sticker4001">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 4001</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 4001</p>
                    </div>
                </div>
            </div>
            </Link>
            
        </div>  
    </ShopPage>                  
    );
};


export default CuteStickersList;