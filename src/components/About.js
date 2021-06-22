import React from "react";
import MaskFinderimg from '../img/Mask_Finder.png';

const About = () => {
  return (
    <div id="about">
      <h2>About</h2>
      <div className="content">
        <ul>
          <li>
            <a
              href="https://reiracode.github.io/cloversky/project_cloversky.html"
              target="_blank"
            >
              Cloversky
            </a>
          </li>

          <li>
            <a
              href="https://reiracode.github.io/react-maskfinder/"
              target="_blank"
            >
              Mask Finder with React
            </a>
          </li>

          <li>
            <a
              href="https://reiracode.github.io/Mask_Finder/aync/index.html"
              target="_blank"
            >
              <img src={MaskFinderimg} alt="Mask Finder with JS" />
              Mask Finder with JS
            </a>
          </li>

          <li>
            <a
              href="https://codepen.io/ReiraWorld/full/YzZOoVe"
              target="_blank"
            >
              stroke animation-css
            </a>
          </li>

          <li>
            <iframe
              src="https://codepen.io/ReiraWorld/full/YzZOoVe"
              width="350px"
              height="300px"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
