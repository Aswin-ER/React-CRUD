import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
