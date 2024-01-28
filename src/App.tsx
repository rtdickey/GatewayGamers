import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, About, Dashboard, Profile } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthenticate } from "./hooks/useAuthenticate";
import { ClientPrincipalData } from "./interfaces/Authentication";
import { setIsFetching, setUser } from "./redux/slice/userSlice";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/redux";

function App() {
  const { user, hasFetchedUser } = useAuthenticate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (hasFetchedUser) {
      dispatch(setUser(user as ClientPrincipalData));
      dispatch(setIsFetching());
    }
  }, [dispatch, user, hasFetchedUser]);

  return (
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
          <Route path="login" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
