import Navbar from "./Navbar";
// import About from "./Components/About";
import Appoinment from "./Appoinment";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Offer from "./Offer";
import Pricing from "./Pricing";
import Service from "./Service";
import Spinner from "./Spinner";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Topbar from "./Topbar";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Spinner />
      <Topbar />
      <Navbar />
      <Carousel />
      <Banner />
      {/* <About /> */}
      <Appoinment />
      <Service />
      <Offer />
      <Pricing />
      <Testimonial />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
