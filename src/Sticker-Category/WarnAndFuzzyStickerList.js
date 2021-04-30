import './HotStickersList.css'
import ShopPage from "./ShopPage";
import { Link } from "react-router-dom";

function WarnAndFuzzyStickerList(){
    return(
    <ShopPage>
        <div className="StickerList">
            <Link to ="/Sticker6001">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 6001</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 6001</p>
                    </div>
                </div>
            </div>
            </Link>
            
        </div>  
    </ShopPage>                  
    );
};


export default WarnAndFuzzyStickerList;