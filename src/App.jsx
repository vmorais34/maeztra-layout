import { useEffect, useState } from "react";
import "./App.css";
import BannerFull from "./layout/bannerFull/BannerFull";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Hero from "./layout/hero/Hero";
import Modal from "./layout/modal/Modal";
import Newsletter from "./layout/newsletter/Newsletter";

function App() {
  // const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() =>{
    setIsModalOpen(true);
  }, [])

  return (
    <>
    {/* header */}
    <Header />
    <main class="w-full block">
      <BannerFull />
    </main>
    <div class="bg-quartiary py-8 px-[30px] lg:px-0">
      <Hero />
    </div>
    <Modal isOpen={isModalOpen} />
    <Newsletter />
    <Footer />
    </>
  );
}

export default App;
