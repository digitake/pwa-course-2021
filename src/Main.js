import './Main.css';
import App from './App';
import { Link } from 'react-router-dom';


function Main(){
    return(
        <App>
            <div>
                <p></p>
                <div className="header">    
                 Profile        
                    <Link to="friendlist">
                        <img src="เณรเชน.jpg"width= "30%" height="100%" /> 
                    </Link>
                </div>

                
                
                
                
                
                
                
                       
            </div>
        </App>
    )
}

export default Main;