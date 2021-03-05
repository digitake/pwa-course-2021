import { Link } from 'react-router-dom';


function  MainApp(){
    return (
        <div>
            Main App
            <Link to="/">
                <img src="logodoge192.png"/>
            </Link>
        </div>
    );
};

export default MainApp;