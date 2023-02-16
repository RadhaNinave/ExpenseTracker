import UpdateProfile from './Component/UI/UpdateProfile';
import { Nav, NavLink } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Component/Auth/SignUp';
import Welcome from './Component/UI/Welcome';
import Navigation from './Component/Auth/Navigation';
import ResetPassword from './Component/Auth/ResetPassword';
import Expense from './Component/Auth/Expense';
import { useContext } from 'react';
import AuthContext from './Component/store/AuthContext';

function App() {
    const authCtx=useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div className="App">
      
      <Navigation />

      <Routes>
        <Route path="/login" element={<SignUp />} >
        </Route>
        <Route path='/' element={<Welcome/>}/>
      {!isLoggedIn && <Route path='/expenses' element={<Expense/>}/> }
        <Route path='/update' element={<UpdateProfile/>}/>
        <Route path = "/resetPassword" element ={<ResetPassword/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
