import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Timeline from './components/timeline';
import Design2 from './components/design';

function App() {
  return (
    <Router>
      <div className="w-full h-full flex flex-col mt-5 items-center gap-y-10">
        <div className="flex gap-x-7">
          <a href="/">
            <button className="bg-blue-600 p-1 px-2 rounded-md text-white font-semibold"> DESIGN 1</button>
          </a>
          <a href="/design">
            <button className="bg-blue-600 p-1 px-2 rounded-md text-white font-semibold"> DESIGN 2</button>
          </a>
        </div>
        <h1 className="text-[##263238] text-4xl font-bold">How it works</h1>
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/design" element={<Design2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
