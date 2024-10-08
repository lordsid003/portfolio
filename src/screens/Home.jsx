import { useEffect } from "react";
import "../styles/Main.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {

  useEffect(() => {
    const cursorRounded = document.querySelector('.customCursor');

    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      
      if (cursorRounded) {
        cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    }

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
      <div className="customCursor"></div>

      <div>
        <Navbar />

        <Main />
      </div>

      <Profile />

      <Projects />

      <About />

      <Footer />
    </div>
  );
};

export default Home;