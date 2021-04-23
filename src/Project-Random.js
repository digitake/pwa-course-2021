import './App.css';
import Content from './Content'



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

    const ShowMessage = () =>{
        alert("gg");
    }
    
    return(
    <Content>

     <div className ="App">
         <div className="space">
            Random Food
         </div>
         <div className ="Test">

         <img src= "spin.png" alt = "spin.png" width="400px" height="400px"/>
         <div class="randomTextShow"> Click Random! </div>


            <p>
               <table className ="table-main">
                   <tr>
                        <th>  
                            <img src= "choice.png" alt = "choice.png" width="100px" height="100px"/> 
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
                            <img src= "add new.png" alt = "add new.png" width="100px" height="100px"/> 
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
