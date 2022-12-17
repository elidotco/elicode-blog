import { Header, Socials } from "./";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Socials />
      <Footer />
    </>
  );
};

export default Layout;
