import React from 'react';
import Checkbox from 'pivot-ui/components/checkbox';
import custom from '../css/custom.css';

class RenderCheckbox extends React.Component {
  state = { check1: true, check2: false };

  handleChange = (field, value) => {
    this.setState({...this.state, [field]: value});
  };

  render () {
    return (
      <div>
        <Checkbox
          className={custom.LiveDocsCheckbox} 
          checked={this.state.check1}
          label="Checked option"
          onChange={this.handleChange.bind(this, 'check1')}
          style={{backgroundColor : 'rgba(229, 8, 108, 1.0)', borderColor : 'rgba(229, 8, 108, 1.0)'}}
        />
        <Checkbox
          checked={this.state.check2}
          label="Unchecked option"
          onChange={this.handleChange.bind(this, 'check2')}
          style={{backgroundColor : 'rgba(229, 8, 108, 1.0)', borderColor : 'rgba(229, 8, 108, 1.0)'}}
        />
        <Checkbox
          checked
          disabled
          label="Disabled checkbox"
        />
      </div>
    );
  }
}
export default RenderCheckbox;