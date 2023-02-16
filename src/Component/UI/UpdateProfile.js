import { Fragment, useContext, useRef } from "react";
import { Container,Navbar,Form,Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AuthContext from "../store/AuthContext";
const UpdateProfile=()=> {

  const authCtx=useContext(AuthContext);
  const nameInputRef=useRef();
  const urlInputRef=useRef();
  const navigate=useNavigate();

  const onCancelhandler=(e)=>{
      e.preventDefault();
      navigate('/welcome')


  }

  const updateHandler= async(e)=>{
      e.preventDefault();
      const nameInput=nameInputRef.current.value;
      const urlInput=urlInputRef.current.value;

     await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAXiOYJr-9lsF_yoZxTgE3AByKyl3bGlqw', {
          method: 'POST',
          body: JSON.stringify({
               idToken: authCtx.token,
               displayName:nameInput,
               photoUrl:urlInput,
              returnSecureToken:true,
              }),
          headers: {
            'Content-Type': 'application/json'
          },
      }).then((res)=>{
          if(res.ok){
              return res.json().then((responce)=>{
                  console.log(responce)
                  alert('Your Profile is Completed')
                  navigate('/welcome',{replace:true})
              })
          }else{
              console.log("idToken Not found")
          }
      })
      console.log(nameInput+" "+urlInput)

  }



   return(
       
             <Fragment>
     <Navbar>
      <Container>
        <Navbar.Brand >Winners never quite, Quiters never win</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Your Profile is 64% completed, Complete Profile has higher chances to landing a job <Link to='/update'>Complete Now</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <hr />
        <h4>Contact details</h4>
        <Button  className="cancel" onClick={onCancelhandler}>Cancel</Button>
        <Container className="pt-5">
      <Form className="pt-3" onSubmit={updateHandler}>
        <h1 className="text-center"></h1>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="fullName">Full Name</Form.Label>
          <Form.Control
            id="fullName"
            type="text"
            placeholder="Enter Full name"
            required
            ref={nameInputRef}
           
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Profile Photo Url</Form.Label>
          <Form.Control
            id="photo"
            type="text"
           ref={urlInputRef}
            required
           
          />
        </Form.Group>

      
        <Button variant="primary" type="submit" >
          UpdateDetails
        </Button>

        
      </Form>
    </Container>

       </Fragment>
        
    )

}

export default UpdateProfile;