import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export default function NavBar() {
  const [activeNavLink, setActiveNavLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (name) => {
    setActiveNavLink(name);
  };

  return (
    <Navbar expand="xl" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeNavLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeNavLink === "skills"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#education"
              className={
                activeNavLink === "education"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("education")}
            >
              education
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={
                activeNavLink === "experience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("experience")}
            >
              experience
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeNavLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd">
              <span>Let’s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
