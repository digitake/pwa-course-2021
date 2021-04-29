import './NewStickersList.css'
import ShopPage from "./ShopPage";
import { Link } from "react-router-dom";

function NewStickersList(){
    return(
    <ShopPage>
        <div className="StickerList">
            <Link to ="/Sticker1001">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 1001</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 1001</p>
                    </div>
                </div>
            </div>
            </Link>   
        </div>

        <div className="StickerList">
            <Link to ="/Sticker1002">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 1002</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 1002</p>
                    </div>
                </div>
            </div>
            </Link>   
        </div>

        <div className="StickerList">
            <Link to ="/Sticker1003">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 1003</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 1003</p>
                    </div>
                </div>
            </div>
            </Link>   
        </div>

        <div className="StickerList">
            <Link to ="/Sticker1004">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 1004</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 1004</p>
                    </div>
                </div>
            </div>
            </Link>   
        </div>

        <div className="StickerList">
            <Link to ="/Sticker1005">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 1005</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 1005</p>
                    </div>
                </div>
            </div>
            </Link>   
        </div>

        <div className="StickerList">
            <Link to ="/Sticker1006">
                <div className="Sticker-from">
                <div className="Stcker-ShowImg">
                    <img src="Profile-250.png" width="90px" height="90px" />
                </div>
                <div className="Sticker-DisptionZone">
                    <div className="Sticker-Name">
                        <p id="name">Sticker 1006</p>
                    </div>
                    <div className="Sticker-Disption">
                        <p id="disption">Disption 1006</p>
                    </div>
                </div>
            </div>
            </Link>   
        </div>
    </ShopPage>                  
    );
};


export default NewStickersList;