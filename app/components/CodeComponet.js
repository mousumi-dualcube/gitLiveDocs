import React from 'react';
import custom from '../css/custom.css';
import RenderTab from './RenderTab';

let classToggle = "close";

class ReactCodeComponent extends React.Component{
  state = {
    classToggle: 'open'
  }
  handleClick = (value) => {
    if (this.state.classToggle=="open") {
      this.setState({classToggle: "close"});
    } else {
      this.setState({classToggle: "open"});
    }
    console.log(this.state.classToggle)
    
  };

  render(){
    return(
      <div className={custom.reactCodeComponent}>
        <div className={custom.codeExample}>
          <RenderTab />
        </div>
        <div className={custom.codeBlock} onClick={this.handleClick}>
        
          <span className={custom.codeBar}>
            <i className="fa fa-code" aria-hidden="true"></i>
            <span className="sr-only">Example of </span>
            code
          </span>
        </div>
        {(this.state.classToggle=="open") ? 
          <span></span>
          : 
          <div className={custom.codeBox}>
            <pre>
              <ul>
                <li>
                  <code>
                    &lt;<font color='#8e1da5'>Input</font> <font color='rgb(229, 8, 108)'>type</font>="text"<font color='rgb(229, 8, 108)'> name</font>="name"
<font color='rgb(229, 8, 108)'> placeholder</font>="I&rsquo;m an input"
/&gt;
                  </code>
                </li>
              </ul>
            </pre>
          </div>
        }
      </div>
    );
  }
}

export default ReactCodeComponent
