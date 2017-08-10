import React from 'react';
import custom from '../css/custom.css';
import RenderInput from './RenderInput';
import {Tab, Tabs} from 'pivot-ui/lib/tabs';

class RenderTab extends React.Component {
  state = {
    index: 0,
    fixedIndex: 1,
    inverseIndex: 1,
    name: '', 
  };

  handleTabChange = (index) => {
    this.setState({index});
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  handleInverseTabChange = (index) => {
    this.setState({inverseIndex: index});
  };

  handleActive = () => {
    console.log('Special one activated');
  };

  handleInputChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  render () {
    return (      
      <section>      
        <Tabs index={this.state.index} onChange={this.handleTabChange} className={custom.codeTabs}>
          <Tab label='Small'>
            <RenderInput type = 'basicInput' name= {'Small'} onhandleChange={this.handleInputChange} />
          </Tab>
          <Tab label='Medium'>
            <RenderInput type = 'basicInput'  name= {'Medium'} onhandleChange={this.handleInputChange} />
          </Tab>
          <Tab label='Large' onActive={this.handleActive}>
            <RenderInput type = 'basicInput'  name= {'Large'} onhandleChange={this.handleInputChange} />
          </Tab>
        </Tabs>
      </section>
    );
  }
}

export default RenderTab