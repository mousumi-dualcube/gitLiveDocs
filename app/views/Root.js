import 'normalize.css';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Layout, Panel, NavDrawer } from 'pivot-ui/lib/layout';
import AppBar from 'pivot-ui/lib/app_bar';

import custom from '../css/custom.css';
import NavDrawerList from '../components/NavDrawerList';

class Root extends Component {
  state = { pinned: false };

  handleSideBarToggle = () => {
    this.setState({ pinned: !this.state.pinned });
  };

  render() {
    return (
      <Layout className={custom.layoutApp}>
        <AppBar
          title={`LIVE DOCS`}
          onLeftIconClick={this.handleSideBarToggle}
          className={custom.appBar}
          leftIcon="menu"
          fixed
          flat
          theme={custom}
        >
        </AppBar>
        <NavDrawer
          active={this.state.pinned}
          onEscKeyDown={this.handleSideBarToggle}
          onOverlayClick={this.handleSideBarToggle}
          permanentAt="lg"
          className={custom.sidebarWrapper}
        >
          <NavDrawerList></NavDrawerList>
          
        </NavDrawer>

        <Panel className={custom.app}>
          {this.props.children}
        </Panel>
      </Layout>
    );
  }
}

export default Root;
