import Banner from "@/components/Banner";
import Funds from "@/components/Funds";
import Newsletter from "@/components/Newsletter";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/Shared/FAQ";
import Slogan from "@/components/Slogan";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Banner />
      <Slogan />
      {/* <Funds /> */}
      {/* <Portfolio /> */}
      <Team />
      {/* <FAQ /> */}
      <Newsletter />
    </>
  );
}
