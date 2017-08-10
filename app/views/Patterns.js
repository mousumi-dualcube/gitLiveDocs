import 'normalize.css';
import React, { Component } from 'react';
import classnames from 'classnames';
import custom from '../css/custom.css';
import RenderCard from '../components/RenderCard';
import RenderButton from '../components/RenderButton';
import DplCard from 'pivot-ui/lib/dpl_card';
import cardOptions from '../utils/cardData.json';

const btnClassesPurple = classnames(custom.left, custom.margin10, custom.flat, custom.neutral, custom.purple);
const pageSummeryText = classnames(custom.pageSummeryText);
const sectionContent = classnames(custom.clear, custom.gap);

const Pattern = React.createClass({
  render: function () {
    return (
      <div className={custom.pageLayout}>
        <div className={custom.lg}>
          <h1 className={custom.pagetitle}>Patterns</h1>
          <p className={custom.pageSummeryText}>The smallest discrete object that can be described by a pattern; the ‘foundational building blocks that comprise all our user interfaces’ including things like labels, form elements and buttons</p>
        </div>
        <div className={sectionContent}>
          <div className={custom.md}>
            <h2 className={custom.pagetitle}>Products</h2>
            <p className={pageSummeryText}>The smallest discrete object that can be described by a pattern; the ‘foundational building blocks that comprise all our user interfaces’ including things like labels, form elements and buttons</p>
            <div className={custom.buttonBlock}>
              <RenderButton  
                label='VIEW ALL'
                purple
              />
            </div>
          </div> 
          <div className={custom.grid3}>
            {
              cardOptions.map((element, index) => {
                if(element.type == 'product') {
                  return <DplCard option={element} key={index} pattern="grid"></DplCard>
                }
              })
            }
          </div>
        </div>  
        <div className={sectionContent}>
          <div className={custom.md}>
            <h2 className={custom.pagetitle}>Features</h2>
            <p className={pageSummeryText}>The smallest discrete object that can be described by a pattern; the ‘foundational building blocks that comprise all our user interfaces’ including things like labels, form elements and buttons</p>
            <div className={custom.buttonBlock}>
              <RenderButton  
                label='VIEW ALL'
                green
              />
            </div>
          </div>
          <div className={custom.grid3}>            
            {
              cardOptions.map((element, index) => {
                if(element.type == 'feature') {
                  return <DplCard option={element} key={index} pattern="grid"></DplCard>
                }
              })
            }
          </div> 
        </div>
        <div className={sectionContent}>
          <div className={custom.md}>
            <h2 className={custom.pagetitle}>Templates</h2>
            <p className={pageSummeryText}>The smallest discrete object that can be described by a pattern; the ‘foundational building blocks that comprise all our user interfaces’ including things like labels, form elements and buttons</p>
            <div className={custom.buttonBlock}>
              <RenderButton  
                label='VIEW ALL'
                yellow
              />
            </div>
          </div>                     
          <div className={custom.grid3}>
            {
              cardOptions.map((element, index) => {
                if(element.type == 'template') {
                  return <DplCard option={element} key={index} pattern="grid"></DplCard>
                }
              })
            }
          </div>
        </div> 
      </div>
    )
  }
});

export default Pattern