import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import addLogo from "../src/assets/add.svg";
import homeLogo from "./src/assets/home.svg";
import menuLogo from "./src/assets/logo.png";
import "./NavigationBar.css";
function NavigationBar() {
  return (
    <Navbar className="bg-body-tertiary" >
      <Container className="navBarContainer">
        <Navbar.Brand href="#home">
          <img
            src={menuLogo}
            width="220"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Nav defaultActiveKey="/home" className="nav-items-container">
          <p className="menu-text">Menu</p>
          <Nav.Link className="nav-item-text" href="/home">
            <div className="navbar-items-container">
              <img src={homeLogo} className="nav-item"></img>
              <span className="menu-item-text">Home</span>
            </div>
          </Nav.Link>
          <Nav.Link className="nav-item-text" href="/home">
            <div className="navbar-items-container">
              <img src={addLogo} className="nav-item"></img>
              <span className="menu-item-text">Add my sound</span>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
