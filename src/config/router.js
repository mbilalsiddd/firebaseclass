import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screen/home";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;