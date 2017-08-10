import React from 'react';
import custom from '../css/custom.css';
import Input from 'pivot-ui/components/input';
import classnames from 'classnames';
const inputClasses = classnames(custom.inputElement);
const inputClassesError = classnames(custom.inputElement, custom.error);

const RenderInput = (props) => {
	let input_type = props.type;
	if(input_type == 'basicInput') {
	  return (
		    <Input
		      type="text"
		      name={props.name}
		      value=''
		      className={inputClasses}
		      placeholder="I’m an input"
		      onChange={props.onhandleChange.bind(this, 'name')}
		    />
	    );
	} else if(input_type == 'inputError') {
	  return (
		    <Input
		      type="text"
		      className={inputClassesError}
		      placeholder="I have an error"
		    />
		);
	} else if(input_type == 'disabled') {
	  return (
		    <Input
		      type="text"
		      name="disabled"
		      value={props.name}
		      className={inputClasses}
		      placeholder="I’m disabled an input"
		      disabled
		    />
		);
	}
};

export default RenderInput;