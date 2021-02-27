import { Link } from 'react-router-dom';
import './LinkManager.css';

function LinkTo(props) {
    return (
        <Link to={props.to}>
            <button >
                {props.value}
            </button>
        </Link>
    );
}

export default LinkTo;