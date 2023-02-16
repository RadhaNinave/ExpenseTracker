import { useContext ,Fragment} from "react";
import { NavLink } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { Container,Navbar,Nav}from "react-bootstrap";
import UpdateProfile from "../UI/UpdateProfile";
import Welcome from "../UI/Welcome";
import { Route,Routes } from "react-router-dom";
import SignUp from "./SignUp";
const Navigation = () =>{
    const authCtx=useContext(AuthContext);
    const navigate=useNavigate();
   const logoutHandler = ()=>{
        authCtx.logout();
        navigate('/login');
        alert("logout successfully");
    }

    return(
    
        <Fragment>
      <Navbar bg="light" variant="light">
        <Container>
        <NavLink to="/">Home</NavLink>
          <NavLink to="/expenses">Expenses</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Profile</NavLink>
            <NavLink to="/login">Login</NavLink>
           <NavLink onClick={logoutHandler}>Logout</NavLink>
            </Container>
      </Navbar>
       
    
      
  
    </Fragment>

    )
}
export default Navigation;