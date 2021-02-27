import { Link } from 'react-router-dom'
import backButton from './back_button.png'
import './Shop.css';


function Shop() {
    return (
    
        <div className="shop">
           <div class="shop-header">
               <div class="shop-center">
                   <div class="shop-items">
                    <div class="item1">Item.1</div>
                    <div class="item1">Item.2</div>
                    <div class="item1">Item.3</div>
                    <div class="item1">Item.4</div>
                    <div class="item1">Item.5</div>
                    <div class="item1">Item.6</div>
                    <div class="item1">Item.7</div>
                    <div class="item1">Item.8</div>
                    <div class="item1">Item.9</div>
                    <div class="item1">Item.10</div>
                   </div>
               </div>
               <div class="shop-header">
                   <Link to="/">
                    <img src={backButton}></img>
                  </Link>
                </div>
            </div>
        </div>
            
        )
    }
    
export default Shop;