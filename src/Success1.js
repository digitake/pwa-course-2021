import{Link} from 'react-router-dom';
import './App.css';
import Success from './Success1.png';



function Success1() {
    return(
        <div className="App">
       
      <div > 
              <img src={Success}/>
              
          </div> 
          
          
                     <div>
              <Link to="/home">
          <button>
            Accept
          </button>
          </Link>
            
          </div>

    </div>

   );

}
export default Success1

