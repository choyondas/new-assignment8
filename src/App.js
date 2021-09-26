import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Students from './components/Students/Students';

function App() {


  return (
    <div className= "App">
      <Header></Header>
      <Students></Students>
    </div>
  );
}

export default App;
