import './App.css';
import {Link} from 'react-router-dom';
import Content from './Content'

function SubNote() {

    return(
    
    <div className ="App">

<div className = "noteheaders">


            
                </div>

    <div className = "noteheader">

    <Link to="/" className="image-between">
                    <img src= "back.png" alt = "back.png" width="40px" height="40px" /> 
                </Link>

    <input type="text" id="fname" name="firstname" placeholder="Name Note...">
        
        </input>


        </div>


        <div className = "notemids">
       
        
  <textarea>Hello world...</textarea>

      






            </div>


        <div className = "notebot">
            

            </div>



        </div>

        
    );
    
    

}
export default SubNote;