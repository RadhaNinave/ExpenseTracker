
import { Nav, NavLink } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Component/Auth/SignUp';
import Welcome from './Component/UI/Welcome';

function App() {
    

  return (
    <div className="App">
      <NavLink to="/welcome"></NavLink>
      <SignUp />
      <Routes>
        <Route path='/welcome' element={<Welcome/>} exact>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
