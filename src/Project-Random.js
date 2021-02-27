import './App.css';
import {Link} from 'react-router-dom';

function ProjectMain(){
    return(
     <div className ="App">
         <div className="space">
            Random Name
         </div>
         <div className ="Test">
             <img src= "spin.png" alt = "spin.png" width="400px" height="400px"/> 

            <p>
               <table className ="table-main">
                   <tr>
                        <th>  
                            <img src= "choice.png" alt = "choice.png" width="100px" height="100px"/> 
                        </th>

                        <th> <div className ="rcorners1 space">
                            Spin
                        </div>
                        </th>

                        <th>
                            <img src= "share.png" alt = "share.png" width="100px" height="100px"/> 
                        </th>
    
                    </tr>
                    <tr>
                        <th>
                            <img src= "add new.png" alt = "add new.png" width="100px" height="100px"/> 
                        </th>
                        <th colSpan ="2"></th>
                   </tr>
               </table>
            </p>
         </div>

         <div className ="image-button">

           
            <Link to="/" className="image-between">
                   <img src= "profile.png" alt = "profile.png" width="100px" height="100px"/> 
            </Link>
            
            <Link to="/AllChat" className="image-between">
                 <img src= "friend list.png" alt = "profile.png" width="100px" height="100px"/> 
             </Link>

            <Link to="/" className="image-between">
                <img src= "dice.png" alt = "profile.png" width="100px" height="100px"/> 
            </Link>

            <Link to="/" className="image-between">
                <img src= "list.png" alt = "profile.png" width="100px" height="100px"/> 
            </Link>

         </div>
     </div>
    );
}

export default ProjectMain;