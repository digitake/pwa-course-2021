import './App.css';
import {Link} from 'react-router-dom';
import Content from './Content'

function MainNote() {

    return(
        <Content>
        <div className ="App">

            
            <div className = "noteheader">
           
            </div>

            <div className = "notemid">

            <div className = "circlesbox1">
            <span class="circles">  </span>
            </div>
            
            
            <div className = "circlesbox2">
            <span class="circles">  </span>
            </div>


            <div className = "circlesbox3">
            <Link to="/Noteparper" className="image-between">
                    <img src= "plus.png" alt = "plus.png" width="190px" height="190px"/> 
            </Link>
            </div>

            </div>


            <div className = "notebot">
            
            </div>

            
        </div>

    
        </Content>
        );
}


export default MainNote;