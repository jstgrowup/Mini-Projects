import Banner from "./Banner";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Products from "./Products";
import AllRoutes from "./Routes/Allroutes";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Products/>
      <AllRoutes />
      <Footer />
    </>
  );
}
