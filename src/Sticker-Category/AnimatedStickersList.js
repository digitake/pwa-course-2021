import './HotStickersList.css'
import ShopPage from "./ShopPage";
import { Link } from "react-router-dom";

function AnimatedStickersList(){
    return(
    <ShopPage>
        <div className="StickerList">
            <Link to ="/Sticker3001">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 3001</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 3001</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>

        <div className="StickerList">
            <Link to ="/Sticker3002">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 3002</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 3002</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        
        <div className="StickerList">
            <Link to ="/Sticker3003">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 3003</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 3003</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        
        <div className="StickerList">
            <Link to ="/Sticker3004">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 3004</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 3004</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    </ShopPage>                  
    );
};


export default AnimatedStickersList;