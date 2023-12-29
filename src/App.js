import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/project' element={<ProjectsPage/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
