import { Link } from 'react-router-dom';
import '../CSS/Home.css';
import App from '../App';


function IconButtom(props) {
    return (
        <Link to={props.to}>
            <button className='iconButton'>
                {props.value}</button>
        </Link>
    );
}

function Home() {
    return (
        <App>
            <div>
                <div className="App">
                    <div className='app'>
                        <IconButtom value='Chat Room' to='chat' />
                        <IconButtom value='Game Room' to='home' />
                    </div>
                    <div className='app'>
                        <IconButtom value='Settings-1' to='setting1' />
                        <IconButtom value='Settings-2' to='setting2' />
                    </div>

                </div>
            </div >
        </App>

    );
}

export default Home;
