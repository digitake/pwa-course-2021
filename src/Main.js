import './Main.css';
import App from './App';


function Main(){
    return(
        <App>
            <div>
                <div class="header">
                     <h1>Strawberry</h1>
                </div>
                    <div class="row">
                    <div class="col-3 col-s-3 menu">
                            <ul>
                        <li>Search</li>
                        <li>Post</li>
                        <li>Notifications</li>
                        <li>...</li>
                    </ul>
                </div>

                    <div class="col-6 col-s-9">
                        <h1>Image Profile</h1>
                        <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
                    </div>

                    <div class="col-3 col-s-12">
                        <div class="aside">
                            <h2>What?</h2>
                            <p>Chania is a city on the island of Crete.</p>
                            <h2>Where?</h2>
                            <p>Crete is a Greek island in the Mediterranean Sea.</p>
                            <h2>How?</h2>
                            <p>You can reach Chania airport from all over Europe.</p>
                        </div>
                    </div>
                </div>

                    <div class="footer">
                        <p>Strawberry</p>
                    </div>
            </div>
        </App>
    )
}

export default Main;