import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import InfoIcon from './components/InfoIcon/InfoIcon';
import MainContent from './components/MainContent/MainContent';


class App extends Component {
  state = {
    sideDrawerOpen: false,
    currentPage: '/',
    infoContent: undefined
  };

  drawerToggleClickHandler = () => {;
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className='App' style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
        <InfoIcon />
        <MainContent />

      </div>
    )
  }
}

export default App