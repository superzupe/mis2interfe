import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import SemuaProduk from './pages/SemuaProduk';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/semuaproduk"
          element={<SemuaProduk />}
        />
        <Route
          path="*"
          element={<h1>404 - Page not Found</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
