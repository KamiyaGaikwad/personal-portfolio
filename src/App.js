import React from "react";
import './App.css';
import {NavBar} from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerticalNavBar } from "./components/VerticalNavbar";
import {Home} from "./components/Home";
import {About} from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import HashnodeBlog from "./components/HashnodeBlog";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <VerticalNavBar /> */}
      <Home />
      <About />
      <Projects />
      <HashnodeBlog />
      <Footer />
    </div>
  );
}

export default App;
