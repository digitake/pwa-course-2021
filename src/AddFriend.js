import App from './App';
import camera from './image/camera.png';
import Qr from './image/Qr.jpg';
function AddFriend() {
    return (
        <App>

            <div>

                <body>

                    <h1>Add Friend </h1>

                    <form>
                    <textarea  name="address" cols="20" rows="1"></textarea>
                    </form>

                    <button>
                        My ID is : 12234253537
                    </button>

                    <h3><img src={Qr}  width="100" height="100"/>&nbsp;&nbsp; <img src={camera}  width="100" height="100"/></h3>

                </body>
                
            </div>

        </App>
    )
};

export default AddFriend;