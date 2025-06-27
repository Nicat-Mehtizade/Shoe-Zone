import { Outlet } from "react-router-dom";
import NavbarClient from "../../components/Client/Navbar/Navbar";

const ClientLayout = () => {
  return (
    <>
      <NavbarClient />
      <Outlet />
      <h2>I'm Footer</h2>
    </>
  );
};

export default ClientLayout;
