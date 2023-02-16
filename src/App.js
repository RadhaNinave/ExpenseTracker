import UpdateProfile from './Component/UI/UpdateProfile';
import { Nav, NavLink } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Component/Auth/SignUp';
import Welcome from './Component/UI/Welcome';
import Navigation from './Component/Auth/Navigation';

function App() {
    

  return (
    <div className="App">
      
      <Navigation />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/update' element={<UpdateProfile/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
