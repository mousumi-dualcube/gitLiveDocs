import React from 'react';
import custom from '../css/custom.css';
import cardOptions from '../utils/cardData.json';
import classnames from 'classnames';
import Autocomplete from 'pivot-ui/components/autocomplete';
import RenderCard from './RenderCard';
import RenderPopover from './RenderPopover';

const btnClasses = classnames(custom.autocomplete);
const source = {
  'buttons': 'Buttons',
  'formElements': 'FormElements',
  'images': 'Images',
  'feedback': 'Feedback',
  'typography': 'Typography',
  'iconography': 'Iconography',
  'link': 'link',
  'popover': 'Popover',
  'modal': 'Modal',
};

let cardselectedItem = cardOptions.length;
class RenderAutocomplete extends React.Component {
  state = {
    simple: '',
    cardOptionss: cardOptions,
    pattern: 'grid'
  }

  handleChange = (value) => {
    this.setState({simple: value});
    let cardselected = [];
      {cardOptions.map((element, index) => {
        if(element.name == value) { 
          cardselected.push(element);
        }
      })};
    cardselectedItem = cardselected.length;
    this.setState({cardOptionss: cardselected });
  };

  handleClick = (value) => {
    console.log(value);
    this.setState({pattern: value});
  }

  render (props) {
    return (
      <div>
        <Autocomplete
          direction="down"
          selectedPosition="above"
          placeholder="Quick find"
          multiple={false}
          onChange={this.handleChange}
          source={source}
          value={this.state.simple}
          className={custom.inputElement}
          icon='search'
        >
          <span className={custom.item}>{cardselectedItem} Items</span>
        </Autocomplete>
        <div className={custom.filterBox}>
          <RenderPopover/>
          <button className={custom.cardInputButton} onClick={this.handleClick.bind(null, 'grid')} ><i className="fa fa-th" aria-hidden="true"></i></button>
          <button  className={custom.cardInputButton} onClick={this.handleClick.bind(null, 'list')} ><i className="fa fa-list" aria-hidden="true"></i></button>
        </div>
        <div style={{"clear" : "both"}} >
          {this.state.cardOptionss.map((element, index) => {
            return <RenderCard pattern = {this.state.pattern} key={'mykey' + index} option={element} />
          })}
        </div>
      </div>
    );
  }
}

export default RenderAutocomplete