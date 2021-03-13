import './App.css';
import Content from './Content'
function ProjectMain(){
    return(
    <Content>

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

        
     </div>
     </Content>
    );
}

export default ProjectMain;