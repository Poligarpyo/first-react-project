import ButtonGradient from "../../assets/svg/ButtonGradient";
import Benefits from "../../components/Benefits";
import Collaboration from "../../components/Collaboration";
import Header from "../../components/Header";
import Services from "../../components/Services";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div className="pt-[6rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
