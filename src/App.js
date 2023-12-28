import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:subpage?' element={<Home/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
