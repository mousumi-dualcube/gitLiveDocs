import React from 'react';
import { RadioGroup, RadioButton } from 'pivot-ui/components/radio';
import custom from '../css/custom.css';

class RenderRadioButton extends React.Component {
  state = {
    value: 'vvendetta'
  };

  handleChange = (value) => {
    this.setState({value});
  };

  render () {
    return (
      <RadioGroup  name='comic' value={this.state.value}  className={custom.livedocs_radio_element} onChange={this.handleChange}>
        <RadioButton  label='The Walking Dead' value='thewalkingdead'/>
        <RadioButton  label='From Hell' value='fromhell' disabled/>
        <RadioButton  label='V for a Vendetta' value='vvendetta'/>
        <RadioButton  label='Watchmen' value='watchmen'/>
      </RadioGroup>
    );
  }
}
export default RenderRadioButton;