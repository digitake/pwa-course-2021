import './Profiles.css';


function profiles() {
    
    return (
<div className="Header">
            <div className="Container">
                Profiles
               <ul className="Function">
                   <li className="Function-link">
                   <a href="#"><FiBell/>Facebook</a>
                   </li>
                   <li className="Function-link">
                   <a href="#"><BiPaintRoll/>Instagram</a>
                   </li>
                   <li className="Function-link">
                   <a href="#"><BiPalette/>Spotify</a>
                   </li>
                   <li className="Function-link">
                   <a href="#"><FiInfo/>Line</a>
                   </li>
                   </ul> 
        <div className="App-contents">
        </div>
        <Link to="/PrivateChat">
        <button>
        PrivateChatRoom
        </button>
        </Link>
            </div>
        </div>
    );
};
export default Profiles;