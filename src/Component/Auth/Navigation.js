import { useContext, Fragment } from "react";
import { NavLink } from "react-bootstrap";
import { Router, useNavigate, Link, Routes } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { Container, Navbar, Nav } from "react-bootstrap";
import UpdateProfile from "../UI/UpdateProfile";
import Welcome from "../UI/Welcome";
import { Route } from "react-router-dom";
import Expense from "./Expense";
import ResetPassword from "./ResetPassword";
import SignUp from "./SignUp";
const Navigation = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
    alert("logout successfully");
  };
  //const authCtx=useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
   <div>
      <Navbar className="position-fixed" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              {isLoggedIn && (
                <Nav.Link as={Link} to={"/expense"}>
                  Expense
                </Nav.Link>
              )}
              <Nav.Link as={Link} to={"/contact"}>
                Contact
              </Nav.Link>
              {!isLoggedIn && (
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              )}
               {!isLoggedIn && (
                <Nav.Link as={Link} to={"/expense"}>
                  Expense
                </Nav.Link>
              )}
              {isLoggedIn && (
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Routes>
      
    {isLoggedIn && <Route path="/expense" element={<Expense />}/>}
    <Route path="/about"></Route>
    <Route path="/home" exact element={<Welcome/>}></Route>
    <Route path="/expense" element={<Expense />}></Route>
    <Route path="/login" element={<SignUp />}></Route>
    <Route path="/update" element={<UpdateProfile/>}/>
    <Route path="/resetPassword" element={<ResetPassword/>}/>
    </Routes>
     </div>
   
  );
};
export default Navigation;
