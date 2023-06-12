import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, About, Login, Dashboard } from "./pages";
import * as useFetch from "react-fetch-hook";

function App() {
  const { error, data: clientPrincipal } = useFetch("/.auth/me");
  return (
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
  );
}

export default App;
