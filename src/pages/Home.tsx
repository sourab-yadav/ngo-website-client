import React, { useState } from "react";
import NGOForm from "../components/NGOForm";
import { Navbar } from "./Navbar";
import { Programs } from "./Programs";
import Gallery from "./Gallery";
import { AboutSection } from "./About";
import { EducationSection } from "./Education";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
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
