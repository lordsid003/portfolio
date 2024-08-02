import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Info from './screens/Info';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects/:projectId" element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;
