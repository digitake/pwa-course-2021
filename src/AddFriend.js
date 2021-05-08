import { Link } from 'react-router-dom';

function AddFriend() {
    return (
        <div>
            <h1>Add Friend <Link to="/"><button>Go to Chatroom</button></Link></h1>

            <h2>-----Id-----</h2>
            
            <button>
                My ID is : 12234253537
            </button>

            <h3>-----QR-----  -----camara-----</h3>
            
        </div>
    )
};

export default AddFriend;