import { Link } from 'react-router-dom';


function  MainApp(){
    return (
        <div>
            Main App
            <Link to="/">
                <button>
                    Chatroom
                </button>
            </Link>
        </div>
    );
};

export default MainApp;