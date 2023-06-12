import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, About, Login, Dashboard } from "./pages";
import AuthContextProvider from "./components/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
