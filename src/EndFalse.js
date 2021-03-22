import './EndTrue.css'
import React, {useState} from 'react';


function EndFalse() {


  const [text, setText] = useState("");
   
  const[lines,setlines] = useState(["Congratulations!!!................You will be able to stay with me."]);

  return (
            <div className="fullscreen col-12">
              
              <div className="text-box">
              {
                lines.map(x => {
                  return<div className="text-msg">
                    {x}
                    </div>
                })
              }  
                
              </div>  
              
                   
                   
                   
                   
                   <div className="text-msg">
                     --------You're <td>Dead!</td>--------
                   </div>
                 
</div>

  );

}

 

export default EndFalse;