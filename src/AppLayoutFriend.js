import './AppLayoutFriend.css';

function AppLayoutFriend({children}) {
    return (
        <div className="App">
      <div className="App-header-friend"> <i class="fas fa-search-plus"></i> Chat  <i class="fas fa-user-plus"></i>
    </div>
      <div className="App-content">
        {children}
      </div>
    </div>
    );
};

export default AppLayoutFriend;