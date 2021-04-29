import './Sticker0001.css';
import { Link } from "react-router-dom";


function Sticker0002(){
    return(    
        <div className="StickerPage">
            <div className="StickerPage-header">
                Sticker Details
                <Link to="/HotStickersList">
                    <img src ="back-32.png" align= "Left" />
                </Link>
            </div>
            <div className="StickerPage-body">
                <div className="StickerPage-profile-sticker">
                    <div className=".StickerPage-profile-image">
                        <div className ="Profile-image">
                            <img src="Profile.png" align="Bottom" />
                        </div>
                    </div>
                    <div className=".StickerPage-profile-name-description">
                        <div className=".Profile-name">
                            <p id="name">Name 0002</p>
                        </div>
                        <div className=".Profile-description">
                            <p id="description">Description 0002</p>
                        </div>
                    </div>
                </div>
                <div className="StickerPage-details-zone">
                    <div className="StickerPage-details-sticker-header">
                    </div>
                    <div className="StickerPage-details-sticker">
                        <div className=".StickerPage-details-sticker-row">
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                        </div>
                        <div className=".StickerPage-details-sticker-row">
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                        </div>
                        <div className=".StickerPage-details-sticker-row">
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                            <img src="Profile-250.png" width="150px" height="150px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
};


export default Sticker0002;