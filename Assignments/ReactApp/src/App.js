import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import EmployeeList from './Components/Employee/EmployeeList';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Calculator from './Components/Calculator/Calculator';
import Add from './Components/Calculator/Add';

function App() {
  return (
    <div className='App'>
      <Routes>

        <Route path='/' exact element={<Home/>}/> 
        <Route path='About' exact element={<About/>}/> 
        <Route path='employee' exact element={<EmployeeList/>}/>
        <Route path='calculator' exact element={<Calculator/>}/>
      </Routes>
    </div>
  )
}
export default App