import "./Navbar.css";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useAppContext } from "../../AppContext";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { isOn, setIsOn } = useAppContext();

  const toggleNav = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);

      if (!newIsMobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsOn(darkModeQuery.matches);

    const handleDarkModeChange = (event) => {
      setIsOn(event.matches);
    };

    darkModeQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, [setIsOn]);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className={`Navbar ${isOpen ? "open" : ""} ${isOn ? "dark-mode" : ""}`}
    >
      <div className="navbar-content">
        <div className="lightOrDark">
          <p>Light</p>
          <div
            className={`switch ${isOn ? "dark-mode" : ""}`}
            data-isOn={isOn}
            onClick={toggleSwitch}
          >
            <motion.div
              className={`handle ${isOn ? "dark-mode" : ""}`}
              layout
              transition={spring}
            />
          </div>
          <p>Dark</p>
        </div>
        <p className="title">Portfolio</p>
        {isMobile && (
          <div
            className={`hamburger ${isOpen ? "open" : ""} ${
              isOn ? "dark-mode" : ""
            }`}
            onClick={toggleNav}
          >
            <div
              className={`bar ${isOpen ? "open" : ""} ${
                isOn ? "dark-mode" : ""
              }`}
            ></div>
            <div
              className={`bar ${isOpen ? "open" : ""} ${
                isOn ? "dark-mode" : ""
              }`}
            ></div>
            <div
              className={`bar ${isOpen ? "open" : ""} ${
                isOn ? "dark-mode" : ""
              }`}
            ></div>
          </div>
        )}
        <div
          className={`nav-links ${isOpen ? "open" : ""} ${
            isOn ? "dark-mode" : ""
          }`}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={`link ${isOn ? "dark-mode" : ""}`}
            onClick={toggleNav}
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={`link ${isOn ? "dark-mode" : ""}`}
            onClick={toggleNav}
          >
            Skills
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={`link ${isOn ? "dark-mode" : ""}`}
            onClick={toggleNav}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
