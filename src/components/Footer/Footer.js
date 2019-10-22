import React from 'react';

import './Footer.css';

const footer = props => (
  <footer>
    <nav class="footer_navigation">
      <div class="spacer"></div>
      <div class="footer_navigation-items">
        <ul>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/interests">Interests</a></li>
        </ul>
      </div>
    </nav>
  </footer>
);

export default footer;