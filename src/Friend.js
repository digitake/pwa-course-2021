import App from './App';
import './Friend.css';
import { Link } from 'react-router-dom';

function Friend(){
    return(

        <App>
            <h2>My Friend</h2>

            <p></p>

        <div className="name-width-full">
            <img src="max.png" width="100" height="100" align= "middle" />     
            
          <b>Domemy</b>
        </div>
        <hr></hr>
        <div className="name-width-full">
            <img src="mark.png" width="100" height="100" align= "middle" />     
            
          <b>Domemy</b>
        </div>
        <hr></hr>
        <div className="name-width-full">
            <img src="tin.png" width="100" height="100" align= "middle" />     
            
          <b>Tinny</b>
        </div>
        <hr></hr>
        <div className="name-width-full">
            <img src="mon.png" width="100" height="100" align= "middle" />     
            
          <b>Tinny</b>
        </div>
        <hr></hr>
        <div className="name-width-full">
            <img src="folk.png" width="100" height="100" align= "middle" />     
            
          <b>Tinny</b>
        </div>
        <hr></hr>


        <p></p>
        <div>
            <Link to="addfriend">
                <p>
                <img src="add.png" width="70" />
            </p>
            </Link>
            </div>

       
        </App>
    
    
    )
}

export default Friend;