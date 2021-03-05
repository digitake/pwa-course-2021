import './App.css';
import{Link} from 'react-router-dom'
import  './botton.css';



function  DocWork() 
{
    return(
        <div >  
           
    <iframe title="Google" width="100%" height="1000" 
    src="https://docs.google.com/document/d/1ruuAuaO_ELBasjGb-1yT1lZVOAkiwqy5CZCCysEwXDs/edit?usp=sharing" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

    </iframe>
    
        <Link to ="/Home"> 
        <button  class="Home-1">   
        </button>
        </Link>
            
  
        </div>
        
         )
};



export default DocWork;
