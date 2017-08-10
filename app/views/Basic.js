import 'normalize.css';
import React, { Component } from 'react';
import classnames from 'classnames';
import custom from '../css/custom.css';
import RenderAutocomplete from '../components/RenderAutocomplete';

const Basic = React.createClass({
  render: function () {
    return (
      <div className={custom.pageLayout}>
        <div className={custom.lg}>
          <h1 className={custom.pagetitle}>Basics</h1>
          <p className={custom.pageSummeryText}>The smallest discrete object that can be described by a pattern; the ‘foundational building blocks that comprise all our user interfaces’ including things like labels, form elements and buttons</p>
        </div>
        <RenderAutocomplete />
      </div>
    )
  }
});

export default Basic