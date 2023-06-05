import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Reports, R1, R2 } from "../pages/Reports";
import { NavBar } from "../components/NavBar/NavBar";

export function MyRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/reports" element={<Reports />} />
        
        <Route exact path="/reports/reports1" element={<R1 />} />
        <Route exact path="/reports/reports2" element={<R2 />} />
      </Routes>
    </Router>
  );
}
