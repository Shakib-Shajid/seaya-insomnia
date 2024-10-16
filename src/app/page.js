import Banner from "@/components/Banner";
import Funds from "@/components/Funds";
import Newsletter from "@/components/Newsletter";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Slogan from "@/components/Slogan";
import Team from "@/components/Team";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Banner />
      <Slogan />
      <About />
      {/* <Funds /> */}
      {/* <Portfolio /> */}
      <Team />
      <FAQ />
      <Newsletter />
    </>
  );
}
