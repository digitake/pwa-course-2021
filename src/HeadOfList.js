import './App.css';
import{Link} from 'react-router-dom';
import Back from './Back.png';

function HeadOfList({children}) {
  

    return (
        <div className="App">
         <div className= "App-chat-friend">
    
    <div className= "App-head-chatFriend">
       <Link to="/home" >
         <img src={Back}/>
         </Link> 
         </div>
         <div className= "App-head-chatFriend">
         
<div className= "App-head-chatFriend">

</div>
         </div>
         
         
         <div className= "App-head-chatFriend">
       
</div>
<div className= "App-head-chatFriend">
       
       </div>
       <div className= "App-head-chatFriend">
      
       </div>
      </div>
      
      <div className="App-content">

  {children}
  </div>
     
      </div>
      

 
    );
  }
  
  export default HeadOfList;