import { Outlet } from "react-router-dom";
import NavbarClient from "../../components/Client/Navbar/Navbar";
import Header from "../../components/Client/Header/Header";
import Footer from "../../components/Client/Footer/Footer";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <NavbarClient />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientLayout;
