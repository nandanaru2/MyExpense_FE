import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import { Home } from "../views/Home";
import SignInPage from "../views/SignIn";
import PrivateRoute from "./PrivateRoute";
import { useState } from "react";
const MainRoutes: React.FC = () => {
  const [isAuthenticated, _setIsAuthenticated] = useState<boolean>(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        {/* Example usage of PrivateRoute with extra props */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/home" element={<Home />} />
          </Route>
          </Routes>
    </Router>
  );
};

export default MainRoutes;
