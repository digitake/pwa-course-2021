import { Link } from "react-router-dom";

import main from './image/BT.png';

import pro from './123.jpg';

function  MainPage() {
    return(
        <div>

            <body>
           <Link to="/profiless">
                <img src={main} width="200" border="5"  />
           </Link>

           <center><img src={pro} width="200" border="5" align="top" /></center>
                <p align="center">
                    <h1>
                    Name
                    </h1>
                    <h1>
                    ID ********
                    </h1>
                </p>
            </body>
           
        </div>
    ) 
 }
 
 export default MainPage;