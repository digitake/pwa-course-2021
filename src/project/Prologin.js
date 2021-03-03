import './Prologin.css';

function Prologin() {
  return (
    <div className="Prologin">
      <header className="Prologin-header">
        <img className="Prologin-header-logo" src="/images/boxchat.jpg" />
      </header>
      <div className="signin-logo">
        <button>
         <img src="/images/sign.jpg" />
        </button>
      </div>
      <div>
        <p>You have account?</p>
      </div>
    </div>
  );
}

export default Prologin;