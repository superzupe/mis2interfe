import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from '../pages/Register';
import Home from '../pages/Home';
import AllVideos from "../pages/AllVideos";
import { isAuthenticated } from "../utils/auth";

//halaman yang butuh login
const ProtectedRoutes = ({ children }) => {
  if (!isAuthenticated())
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  return children;
};

//halaman login/register, redirect kalau sudah login
const PublicRoutes = ({ children }) => {
  if (isAuthenticated())
    return (
      <Navigate
        to="/home"
        replace
      />
    );
  return children;
};

const AppRoutes = () => {
  return (
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
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoutes>
            <Register />
          </PublicRoutes>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/all-videos"
        element={
          <ProtectedRoutes>
            <AllVideos />
          </ProtectedRoutes>
        }
      />
      <Route
        path="*"
        element={<h1>404 - Page not Found</h1>}
      />
    </Routes>
  );
};

export default AppRoutes;
