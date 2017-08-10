import React from 'react';
import custom from '../css/custom.css';
import classnames from 'classnames';
import {IconMenu, MenuItem, MenuDivider } from 'pivot-ui/components/menu';

class RenderPopover extends React.Component {

  render(props) {
    return (
		<IconMenu 
			icon={<span>Popular<i className="fa fa-chevron-down" aria-hidden="true"></i></span>} 
			position='topRight' 
			menuRipple 
			className={custom.menuList} 
		>
		    <MenuItem value='Featured' caption='Featured' />
		    <MenuItem value='Popular' caption='Popular' />
		    <MenuItem value='Alphabetical (A-Z)' caption='Alphabetical (A-Z)' />
		    <MenuItem value='Reverse (Z-A)' caption='Reverse (Z-A)' />
		</IconMenu>
    );
  }
}

export default RenderPopover;
