import React from "react";
import { Navbar } from "./Navbar";
import { Programs } from "./Programs";
import Gallery from "./Gallery";
import { AboutSection } from "./About";
import { EducationSection } from "./Education";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import AuthForm from "./AuthForm";
export const NGO_NAME = "J.B's NGO";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <EducationSection />
      <Programs />
      <Gallery />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
