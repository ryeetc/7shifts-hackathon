import './App.scss';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Profile from './pages/Profile/Profile';
import Milestone from './pages/Milestone/Milestone';
import DesktopPage from "./pages/DesktopPage/DesktopPage.js"

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path ="/"  element = {<Profile />}/>
         <Route path ="/milestone"  element = {<Milestone />}/> 
         <Route path ="/employees"  element = {<DesktopPage />}/>
        {/* <Route path ="/*" element ={} />  */}
      </Routes>
      
   </BrowserRouter>
  );

}

export default App;
