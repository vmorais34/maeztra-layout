import { useEffect, useState } from "react";
import "./App.css";
import BannerFull from "./layout/bannerFull/BannerFull";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Hero from "./layout/hero/Hero";
import Modal from "./layout/modal/Modal";
import Newsletter from "./layout/newsletter/Newsletter";
import Brands from "./layout/brands/Brands";
import Tipbar from "./layout/tipbar/Tipbar";
import Shelf from "./layout/shelf/Shelf";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  useEffect(() =>{
    setIsModalOpen(true);
  }, [])

  return (
    <>
      <Header />
      <main class="w-full block bg-primary">
        <BannerFull />
        {/* Benefits - Tipbar */}
        <Tipbar />
        {/* Brands */}
        <Brands />
        {/* Shelf */}
        <Shelf />
        <div class="bg-quartiary py-8 px-[30px] lg:px-0">
          <Hero />
        </div>
        <Newsletter />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
}

export default App;
