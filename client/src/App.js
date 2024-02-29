import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; // Import Routes from react-router-dom
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/otherpage">Other Page</Link>
            </li>
          </ul>
        </nav>

        {/* Use Routes instead of Route */}
        <Routes>
          <Route path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
