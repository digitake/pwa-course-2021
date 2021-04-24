import './App.css';
import { Link } from 'react-router-dom';
import {RiChat3Fill } from 'react-icons/ri';


function App({children}) {
 
  return (
    <div className="App">
      <div className="App-header">
             <Link to="/App">
            <div>
               <RiChat3Fill size = "3em" color = "white"/> 
            </div>
             </Link>
         </div>
      <div className ="App-content">
        {children}
    </div>
    </div>
  );
}

export default App;