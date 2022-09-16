import Profile from './pages/Profile/Profile';
import './App.scss';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import TaskCard from './components/TaskCard/TaskCard';
function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path ="/"  element = {<Profile />}/>
        {/* <Route path ="/milestone"  element = {<Milestone />}/>
        <Route path ="/employees"  element = {<Employees />}/>
        <Route path ="/*" element ={} /> */}
      </Routes>
      <TaskCard />
      <Navbar />
   </BrowserRouter>
  );

}

export default App;
