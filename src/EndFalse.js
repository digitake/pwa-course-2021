 import './EndTrue.css';
 import {Link} from 'react-router-dom';
 import {useState} from 'react';
 

 function EndFalse() {

    const [text,setText] = useState("");
    
    const [lines, setLines] = useState(["Congratulations.......... You will able to stay with me."]);   

  return (
     
    <div className="App col-12">  
    <Link to="/App">
    <button>
    Back to chat
    </button>
    </Link>
    

    <div className="App col-12">
    {
      lines.map(x=>{
      return <div className="App-text col-4">
          {x}
         
      </div>
      })
    } 
           <div className="EndScene-survived">
             <h5>-----You're Dead!-----</h5>
            </div>
    </div> 
                  
    </div>
    
  );
  
  
}

 export default EndFalse;