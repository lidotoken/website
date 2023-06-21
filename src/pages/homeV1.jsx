import GlobalStyles from "../assets/styles/GlobalStyles";
import Popup from "../components/section/popup";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner/v1";
import About from "../components/section/about/v1";
import Tokenomics from "../components/section/about/Tokenomics";
import RoadMap from "../components/section/roadMap/v1";
import FAQ from "../components/section/faq/v1"; 
import Footer from "../components/section/footer/v1";

const HomeV1 = () => {
  return (
    <Layout>
       <GlobalStyles />  
      <Popup />
      <Header />
      <Banner />
      <About />
      <Tokenomics />
      <RoadMap /> 
      <FAQ />
      <Footer />
    </Layout>
  );
};

export default HomeV1;
