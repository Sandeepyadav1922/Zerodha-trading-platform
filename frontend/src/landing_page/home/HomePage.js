import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";

// import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;