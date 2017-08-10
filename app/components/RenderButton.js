import React from 'react';
import custom from '../css/custom.css';
import classnames from 'classnames';
import { Button, IconButton, BrowseButton } from 'pivot-ui/components/button';

const btnClasses = classnames(custom.left, custom.margin10, custom.flat, custom.neutral);
const btnClassesYellow = classnames(btnClasses, custom.yellow);
const btnClassesPurple = classnames(btnClasses, custom.purple);

const RenderButton = (props) => {
  const label = props.label;
  let disabled = false;
  if(props.disabled) disabled = true;

  if(props.green) {
    return (
      <Button
        label = {label}
        className={btnClasses}        
      />
    );
  } 
  if(props.yellow) {
    return (
      <Button
        label = {label}
        className={btnClassesYellow}
      />
    );
  }  
  if(props.purple) {
    return (
      <Button
        label = {label}
        className={btnClassesPurple}
        disabled = {disabled}
      />
    );
  }
}



export default RenderButton;