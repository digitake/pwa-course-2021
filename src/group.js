import { Link } from 'react-router-dom'
function group() {
    return (
        <div className="group">

            <div className="group-header">

                <div className="btn-cover">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="btn-back">
                            Back
                    </div>
                    </Link>
                </div>
                <div>
                    Group Chat

        </div>
            </div>
            <br />
            <div className="group-content">
                <Link to="/chatbox" style={{ textDecoration: "none"}}>
                    <div className="btn-chatbox">
                        แชทคุยกับอาจารย์
                    </div>
                </Link>
                <div>
                    <Link to="/chatbox2" style={{ textDecoration: "none"}}>
                        <div className="btn-chatbox">
                            หาเพื่อนเล่นเกม
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default group