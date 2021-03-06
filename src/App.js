import './App.css';
import {Link} from 'react-router-dom';

function App() 
{
  return (
    <div className="App"> 
      <div className="App-header App-logo ">
        <div className="Friend-Button Menu-Button">
             <Link to = "/friend-list">
              <img src= "Back-32.png"/>
             </Link>
             <Link to ="/menu">
             <img src= "down32.png" align ="right"/> 
             </Link>
          </div>
       </div>
     </div>
     
    );
}

export default App;
