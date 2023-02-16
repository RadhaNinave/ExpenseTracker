import { Fragment } from "react"
import { Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './Welcome.css';

const Welcome = () =>{
    return (
       <Fragment>
     <Navbar>
      <Container>
        <Navbar.Brand href="#home">Welcome to Expense Tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Your Profile is Incomplete: <Link to='/update'>Complete Now</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <hr />
       </Fragment>
    )
}
export default Welcome;