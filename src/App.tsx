import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, About, Login, Dashboard } from "./pages";
import AuthContextProvider from "./components/AuthContextProvider";
import Success from "./pages/Success";
import SuccessLogout from "./pages/SuccessLogout";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import { useAuthenticate } from "./hooks/useAuthenticate";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="success" element={<Success />} />
            <Route path="successlogout" element={<SuccessLogout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
