import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Timeline from './components/timeline';
import Design2 from './components/design';
import HowItWorks from './components/howitworks';

function App() {
  return (
    < div className='text-center mt-14'>
      <h1 className='text-3xl font-bold mb-14'> How It Works </h1>
      <HowItWorks />
    </ div>
  );
}

export default App;
