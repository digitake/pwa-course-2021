import './App.css';
import {Link} from 'react-router-dom';

function App({children}) {

  return (

    <div className="AppLogin">
      <div className ="halfspaceCentor">
        <img src= "dice message logo.png" alt = "dice message logo.png" width="500px" height="500px"/> 
      
      </div>
      <div className ="halfspaceCentor">
    
          <Link to="/random-main" className="image-between">
            <img src= "login icon.png" alt = "login icon.png" width="240px" height="100px"/>
          </Link>
        <p>
           <img src= "register icon.png" alt = "register icon.png" width="240px" height="100px"/>
        </p>
       
      </div>
    </div>
    
  );
}
export default App;