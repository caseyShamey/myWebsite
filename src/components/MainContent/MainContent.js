import React from 'react';

import InfoIcon from '../InfoIcon/InfoIcon';

import resume from './resume.pdf';

import './MainContent.css';

const mainContent = props => {
  return (
    <main className='mainWrapper'>
      <InfoIcon />
      <h1>Casey Shamey</h1>
      <embed src={resume} type="application/pdf" />
    </main>
  )
}

export default mainContent;