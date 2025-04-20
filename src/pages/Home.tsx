import { Navbar } from "./Navbar";
import { Programs } from "./Programs";
import Gallery from "./Gallery";
import { AboutSection } from "./About";
import { EducationSection } from "./Education";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { useState } from "react";
export const NGO_NAME = "J.B's NGO";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div>
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Banner isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <EducationSection />
      <Programs />
      <Gallery />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
