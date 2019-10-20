import React from 'react';

import InfoIcon from '../InfoIcon/InfoIcon';

import resume1 from './resume1.jpg';
import resume2 from './resume2.jpg';
import resume3 from './resume3.jpg';

import './MainContent.css';

const mainContent = props => {
  return (
    <main className='mainWrapper'>
      <InfoIcon />
      <h1>Casey</h1>
      <img src={resume1} alt="Resume1" width="85%" />
      <img src={resume2} alt="Resume2" width="85%" />
      <img src={resume3} alt="Resume3" width="85%" />
    </main>
  )
}

export default mainContent;