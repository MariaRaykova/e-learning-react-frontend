import Header from "../Header";
import Footer from "../Footer";

function PageWrapper({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* <p className="reserved">All rights reserved &copy; MariaRaykova</p> */}
    </div>
  );
}
export default PageWrapper;
