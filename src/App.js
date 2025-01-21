import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import './input.css';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

function App() {
  return (<div className="flex flex-col min-h-screen">
    <div className="flex-grow p-8">
    <Nav></Nav>
    <Routes>
    <Route path='/' element={<Courses/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
    <Footer className=''></Footer>
    </div>
  );
}

export default App;
