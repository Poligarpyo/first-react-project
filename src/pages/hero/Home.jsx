import ButtonGradient from "../../assets/svg/ButtonGradient";
import Header from "../../components/Header";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div className="pt-[6rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
