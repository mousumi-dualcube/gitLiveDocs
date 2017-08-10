import 'normalize.css';
import React, { Component } from 'react';
import classnames from 'classnames';

import custom from '../css/custom.css';
import RenderFormElement from '../template/RenderFormElement';


const FormElements = React.createClass({
  render: function () {
    return (
      <div className={custom.pageLayout}>
        <div className={custom.mainContent}>
          <div className={custom.lg}>
            <h1 className={custom.pagetitle}>Form elements</h1>
            <p className={custom.pageSummeryText}>Forms allow the user to declare a preference or provide data. There are multiple form types described below.</p>
          </div>
          <div className={custom.sectionContent}>
            <div className={custom.formElements}>  
              <RenderFormElement type="basicInput" title="Basic Input"/>
              <RenderFormElement type="inputError" title="Input Error"/>
              <RenderFormElement type="disabled" title="Disabled Input"/>
            </div>
          </div>
        </div>
        <div className={custom.sidebar}>
        </div>
      </div>
    )
  }
});

export default FormElements