import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>

              <Dashboard setIsLoggedIn={setIsLoggedIn} />
            </ProtectedRoute>
          }
        />
        <Route path="/members" element={<Members />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
