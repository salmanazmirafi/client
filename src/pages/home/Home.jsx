import React from "react";
import Featude from "../../component/featued/Featude";
import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import MailList from "../../component/mailList/MailList";
import Navbar from "../../component/navbar/Navbar";
import PoperTy from "../../component/popetty/PoperTy";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featude />
        <div className="homeTitle">Browse by property type</div>
        <PoperTy />
        <div className="homeTitle">Homes guests love</div>
        <FeaturedProperties />
      </div>
      <MailList />
      <div className="homeContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
