import { useContext } from "react";
import { NavLink } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Navigation = () =>{
    const authCtx=useContext(AuthContext);
    const navigate=useNavigate();
   const logoutHandler = ()=>{
        authCtx.logout();
        navigate('/');
        alert("logout successfully");
    }

    return(
        <div className='mainNav'>
    <nav>

        
        <NavLink to="/home">Home</NavLink> 
            <NavLink to="/expenses">Expenses</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/login">Login</NavLink>
             <NavLink onClick={logoutHandler}>Logout</NavLink>
        
    </nav>
    </div>

    )
}
export default Navigation;