import './StickerBase.css';
import { Link } from "react-router-dom";

function Sticker5002(){
    return(    
        <div className="StickerPage">
            <div className="StickerPage-header">
                Sticker Details
                <Link to="/CoolStickersList">
                    <img src ="back-32.png" align= "Left" />
                </Link>
            </div>
            <div className="StickerPage-body">
                <div className="StickerPage-profile-sticker">
                    <div className=".StickerPage-profile-image">
                        <div className ="Profile-image">
                            <img src="Profile.png" width="100px" height="100px" align="Bottom" />
                        </div>
                    </div>
                    <div className=".StickerPage-profile-name-description">
                        <div className=".Profile-name">
                            <p id="name">Name 5002</p>
                        </div>
                        <div className=".Profile-description">
                            <p id="description">Description 5002</p>
                        </div>
                    </div>
                </div>
                <div className="StickerPage-details-zone">
                    <div className="StickerPage-details-sticker-header">
                    </div>
                    <div className="StickerPage-details-sticker">
                        <div className=".StickerPage-details-sticker-row">
                            <img src="Profile-250.png" width="110px" height="110px" />
                            <img src="Profile-250.png" width="110px" height="110px" />
                            <img src="Profile-250.png" width="110px" height="110px" />
                        </div>
                        <div className=".StickerPage-details-sticker-row">
                            <img src="Profile-250.png" width="110px" height="110px" />
                            <img src="Profile-250.png" width="110px" height="110px" />
                            <img src="Profile-250.png" width="110px" height="110px" />
                        </div>
                        <div className=".StickerPage-details-sticker-row">
                            <img src="Profile-250.png" width="110px" height="110px" />
                            <img src="Profile-250.png" width="110px" height="110px" />
                            <img src="Profile-250.png" width="110px" height="110px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Sticker5002;