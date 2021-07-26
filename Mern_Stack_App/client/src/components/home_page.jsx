import {logout} from "../actions/auth";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

function HomePage ({username,isAuthenticated,logout}){
    console.log(isAuthenticated)
    const handleLogout = () => {
        logout();
      };

      if (!isAuthenticated) {
        return <Redirect to='/login' />;
      }

    return (
        <div>
            <h1>home page {username}</h1>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

const mapStateToProps = state => ({
    username: state.auth.username,
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, {logout})(HomePage);