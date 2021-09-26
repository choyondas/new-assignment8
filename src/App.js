import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Students from './components/Students/Students';

function App() {
// useEffect(()=>{
//   fetch('./data.json')
//   .then(res => res.json())
//   .then(data => console.log(data))
// },[])

  return (
    <div >
      <Header></Header>
      <Students></Students>
    </div>
  );
}

export default App;
