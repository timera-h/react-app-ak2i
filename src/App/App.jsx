import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { history } from "../_helpers";

// layout
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import Presentation from "../Components/Presentation";
import OurExpertise from "../Components/OurExpertises";
import OurProjects from "../Components/OurProjects";
import OurTeam from "../Components/OurTeam";
import Contact from "../Components/Contact";

// style
import "../style/style.css";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <main className="mainHome">
        <Presentation/>
        <OurExpertise/>
        <OurProjects/>
        <OurTeam/>
        <Contact/>
        </main>
        <Footer/>
      </Router>
    );
  }
}

export { App };
