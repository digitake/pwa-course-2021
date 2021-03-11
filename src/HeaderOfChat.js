import './App.css';
import{Link} from 'react-router-dom';
import Back from './Back.png';

function HeaderOfChat({children}) {
  

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
         Chat Room
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
  
  export default HeaderOfChat;