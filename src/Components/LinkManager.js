import { Link } from 'react-router-dom';
import './LinkManager.css';
import '../CSS/Neptune.css';

function LinkTo(props) {
    return (
        <Link to={props.to}>
            <button className='button home-button'>
                {props.value}
            </button>
        </Link>
    );
}

export default LinkTo;