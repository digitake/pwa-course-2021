import{Link} from 'react-router-dom';
import './App.css';
import sticker1 from './sticker1.png';



function Store() {
    return(
        <div className="App">

       
        <div className="App-header-home">
        Store
                       
    </div>
<div className="App-test">

</div>
<div className="App-middle-home">

<div className="App-pic-left" > 
              <Link to="/home" >
              <img src={sticker1}/>
              </Link> 
              <div className="App-text-left">
               Sticker1 = 10$
                       
           </div>
         
           </div> 
           <div className="App-test"></div>
           <div className="App-pic-left" > 
           <Link to="/home" >
              <img src={sticker1}/>
              </Link> 
              <div className="App-text-left">
              Sticker2 = 10$
           
               </div>
           </div>  
               

           <div className="App-test"></div>
<div className="App-pic-left" >  

               <Link to="/home" >
              <img src={sticker1}/>
              </Link> 
              <div className="App-text-left">
              Sticker3 = 10$

           </div>


               </div> 

               <div className="App-test"></div>
<div className="App-pic-left" >  

               <Link to="/home" >
              <img src={sticker1}/>
              </Link> 
              <div className="App-text-left">
               Sticker4 = 10$
           </div>


               </div> 
               <div className="App-test"></div>
<div className="App-pic-left" >  

               <Link to="/home" >
              <img src={sticker1}/>
              </Link> 
              <div className="App-text-left">
              Sticker5 = 10$
           </div>


               </div> 
               
   </div>

    </div>

   );

}
export default Store;