import './group.css';
import { Link } from 'react-router-dom'
function group(){
    return(
        <div className="group">
      
      <div className="group-header">
    
        <div>

        
        <Link to = "/">
                <button>
                    back 
                </button>
        </Link>
        
        
            Group Chat
            
        </div>
     
     </div>

     <div className = "group-content">  

             <Link to = "/chatbox">
                <button>
                    แชทคุยกับอาจารย์ 
                </button>
            </Link>
            <div>
                เว้นว่าง ให้จารย์ช่วยความกว้าง
            </div>

    <div>
            <Link to = "/chatbox2">
                <button>
                    หาเพื่อนเล่นเกม
                </button>
            </Link>
    </div>

            

    </div>

    </div>
        
    )
}

export default group