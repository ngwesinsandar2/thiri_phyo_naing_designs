import Image from "next/image";
import CurvedCarousel from "./components/CurvedCarousel";
import Navbar from "./components/Navbar";
import SwiperSlider from "../components/SwiperSlider";

const InteriorDesign = () => {
  return (
    <>
      <div className="w-screen h-screen py-6">
        <div className="container mx-auto w-full h-full">
          <Navbar />
          <main className="mt-8">
            <section className="text-center mb-4 relative z-[3]">
              <h1 className="font-['Kalam'] text-5xl mb-4">Interior Design make relax</h1>
              <p className="font-['Inder'] mb-4">
                Lorem ipsum dolor sit amet consectetur. Nulla <br />
                consequat a lacus eleifend.
              </p>
              <button className="font-['Inder'] rounded bg-[var(--purple-tint)] px-8 py-2">Discover</button>
            </section>

            <section>
                <CurvedCarousel />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default InteriorDesign;