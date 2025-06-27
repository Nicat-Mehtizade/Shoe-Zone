import { Outlet } from "react-router-dom";
import NavbarAdmin from "../../components/Admin/Navbar/Navbar";

const AdminLayout = () => {
  return (
    <>
      <NavbarAdmin />
      <Outlet />
      <h2>I'm Footer</h2>
    </>
  );
};

export default AdminLayout;
