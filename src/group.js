import { Link } from 'react-router-dom'
function group() {
    return (
        <div className="group">

            <div className="group-header">

            <div className="btn-cover">
            <Link to = "/" style={{  textDecoration: "none" }}>
                    <div className="btn-back">
                                Back
                    </div>
                </Link>
            </div> 
            <div>
            Group Chat

        </div>

            </div>
<br/>
            <div className="group-content">

                <Link to="/chatbox">
                    <button>
                        แชทคุยกับอาจารย์
                </button>
                </Link>
                <div>
                    เว้นว่าง ให้จารย์ช่วยความกว้าง
            </div>

                <div>
                    <Link to="/chatbox2">
                        <button>
                            หาเพื่อนเล่นเกม
                </button>
                    </Link>
                </div>



            </div>

        </div>

    )
}

export default group