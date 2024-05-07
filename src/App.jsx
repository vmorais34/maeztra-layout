// import { useState } from "react";
import "./App.css";
import BannerFull from "./layout/bannerFull/BannerFull";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Hero from "./layout/hero/Hero";

function App() {
  // const [count, setCount] = useState(0);

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
    <main class="h-96"></main>
    <Footer />
    </>
  );
}

export default App;
