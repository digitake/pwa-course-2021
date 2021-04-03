import { Link } from 'react-router-dom';

function LinkTo(props) {
    return (
        <Link to={props.to}>
            <button className='nav-button'>
                {props.value}
            </button>
        </Link>
    );
}

export default LinkTo;