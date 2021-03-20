import './FlexShow.css';
import {Link} from "react-router-dom";

function FlexShow(){

    return(
        <div className="fullscreen">
            <div className="header-bar">

                <div className="header-brand">
                    {"Hello My flex"}
                </div>

                <div className="header-icon-set">
                     <div className="header-icon">
                     a
                     </div>
                     <div className="header-icon">
                     b
                     </div>
                     <div className="header-icon">
                     c
                     </div>

                 </div>


             </div>
            <div className="content">

            </div>
            <div className="footer-bar">

            </div>
        </div>
    );
};

export default FlexShow;