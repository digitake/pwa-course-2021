import './BGlogin.css';

function BGlogin({children}) {
    return (
        <div 
             className="background-login">
             {children} 
        </div>
    );
}

export default BGlogin;