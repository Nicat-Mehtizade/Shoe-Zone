import { Router, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layouts/Admin/Admin";
import ClientLayout from "../Layouts/Client/Client";
import Home from "../pages/Client/Home/Home";
import NotFound from "../Error/NotFound/NotFound";
import DetailsPage from "../pages/Client/Details"
const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<h1> About </h1>} />
        <Route path="/contact" element={<h1> Contact </h1>} />
        <Route path="/product">
        <Route path=":id" element={<DetailsPage/>}/>
        </Route>
      </Route>
      <Route path="/admin" element={<AdminLayout />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigator;
