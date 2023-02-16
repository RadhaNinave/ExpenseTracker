import UpdateProfile from './Component/UI/UpdateProfile';
import { Nav, NavLink } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Component/Auth/SignUp';
import Welcome from './Component/UI/Welcome';
import Navigation from './Component/Auth/Navigation';
import ResetPassword from './Component/Auth/ResetPassword';

function App() {
    

  return (
    <div className="App">
      
      <Navigation />

      <Routes>
        <Route path="/login" element={<SignUp />} >
        </Route>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/update' element={<UpdateProfile/>}/>
        <Route path = "/resetPassword" element ={<ResetPassword/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
