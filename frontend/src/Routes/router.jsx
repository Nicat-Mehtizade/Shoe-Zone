import { Router, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layouts/Admin/Admin";
import ClientLayout from "../Layouts/Client/Client";
import Home from "../components/Client/Home/Home";
import NotFound from "../Error/NotFound/NotFound";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<h1> About </h1>} />
        <Route path="/contact" element={<h1> Contact </h1>} />
      </Route>
      <Route path="/admin" element={<AdminLayout />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigator;
