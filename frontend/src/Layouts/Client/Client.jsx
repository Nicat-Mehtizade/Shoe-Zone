import { Outlet } from "react-router-dom";
import NavbarClient from "../../components/Client/Navbar/Navbar";
import Header from "../../components/Client/Header/Header";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <NavbarClient />
      <Outlet />
      <h2>I'm Footer</h2>
    </>
  );
};

export default ClientLayout;
