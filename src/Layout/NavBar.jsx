import React from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <div  className="containerNav">
      <Link to="presentation" spy={true} smooth={true} className="logo">
        <strong>
          AK2I <br /> CONSULTING
        </strong>
      </Link>
      <ul className="listLinks">
        <li className="link">
          <Link to="expertise" spy={true} smooth={true}>
            EXPERTISE
          </Link>
        </li>
        <li className="link">
          <Link to="projects" spy={true} smooth={true}>
            PROJETS
          </Link>
        </li>
        <li className="link">
          <Link to="teams" spy={true} smooth={true}>
            ÉQUIPES
          </Link>
        </li>
        <li className="link">
          <Link to="contact" spy={true} smooth={true}>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}
