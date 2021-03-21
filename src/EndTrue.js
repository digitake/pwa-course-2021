import './EndTrue.css'
import React, {useState} from 'react';


function EndTrue() {


  const [text, setText] = useState("");
   
  const[lines,setlines] = useState(["Today.Luck is favoring you.But next time you might be unlucky like today."]);

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
                     --------You're <th>Survived!</th>--------
                   </div>
                 
</div>

  );

}

 

export default EndTrue;