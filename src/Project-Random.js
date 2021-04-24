import './App.css';
import Content from './Content'
import {Link} from 'react-router-dom';


function ProjectMain(){

    const Random = () => {
        var r_message = new Array ();
        r_message[0] = "Ice Cream";
        r_message[1] = "Bread";
        r_message[2] = "Pancakes";
        r_message[3] = "Burger";
        r_message[4] = "Pizza";
        r_message[5] = "Fired Rice";
        r_message[6] = "Banana";
        r_message[7] = "Cake";
        r_message[8] = "Tacos";
        r_message[9] = "Broccoli";

        var i = Math.floor(r_message.length * Math.random());
        alert(r_message[i]);
    
    }
    
    return(
    <Content>

     <div className ="App">

         <div className="space">
            Random Food
         </div>
         <div className ="Test">

        <div>
            <img src= "spin.png" alt = "spin.png" width="400px" height="400px"/>
        </div>
         
         <div class="randomTextShow"> </div>

            <p>
               <table className ="table-main">
                   <tr>
                        <th>  
                        <Link to="/random-type">
                            <img src= "choice.png" alt = "choice.png" width="100px" height="100px"/> 
                        </Link>
                            
                        </th>


                        <th> <div>
                        
                            <div className="rcorners1 space fontSmall" onClick={Random}>Random!</div>
                                
                        </div>

                        </th>
                        <th>
                            <img src= "share.png" alt = "share.png" width="100px" height="100px"/> 
                        </th>
    
                    </tr>
                    <tr>
                        <th>
                        <Link to="/random-add">
                            <img src= "add new.png" alt = "add new.png" width="100px" height="100px"/> 
                        </Link>
                        </th>
                        <th colSpan ="2"></th>
                   </tr>
               </table>
            </p>
         </div>

        
     </div>
     </Content>
    );
}

export default ProjectMain;
