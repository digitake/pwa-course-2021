import{Link} from 'react-router-dom';
import './App.css';
import rew2 from './rew2.png';
import rewB from './rewbb.png';
import HeaderOfChat from './HeadOfApp';


function Buyshop2() {
    return(
        <HeaderOfChat>
        <div className="App">

       
       

<div className="App-middle-home">

<div > 
<div className="App-png" > 

              <img src={rew2}/>
              
              </div>
              
              <div className="App-text-left">
              
              <Link to="/Success1" >
               <button>
               Sticker1 = 10$
            </button>
            </Link>         
           </div>
           
         
           </div> 
           <div className="App-test"></div>
           <div className="App-pic-left" > 
           <Link to="/buyshop" ></Link>
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              
              
           </div>  
               

           <div className="App-test"></div>
<div className="App-pic-left" >  

               
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              
            


               </div> 

               <div className="App-test"></div>
<div className="App-pic-left" >  

               
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              


               </div> 
               <div className="App-test"></div>
<div className="App-pic-left" >  

            <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              <img src={rewB}/>
              
             


               </div> 
               
   </div>

    </div>
    </HeaderOfChat>

   );

}
export default Buyshop2