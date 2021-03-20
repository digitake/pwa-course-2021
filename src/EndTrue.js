 import './EndTrue.css';
 import {Link} from 'react-router-dom';
 import {useState} from 'react';
 

 function EndTrue() {

    const [text,setText] = useState("");
    
    const [lines, setLines] = useState(["Today.luck is favoring you.But,next time you might be unlucky like to day."]);   

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
           
             <h5>-----You're Survived-----</h5>
             
            </div>
    </div> 
    
    </div>
    
  );
 
  
}

 export default EndTrue;