import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThankForYou } from './pages/ThankForYou';
import NotFound from './pages/NotFound';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="thanks" element={<ThankForYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
