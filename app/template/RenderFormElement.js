import React from 'react';
import custom from '../css/custom.css';
import CodeComponet from '../components/CodeComponet';

class RenderFormElement extends React.Component {
 
  render(props) {    
    return (
      <div className={custom.md}>
        <h2 className={custom.pagetitle}>{this.props.title}</h2>        
        <CodeComponet/>       
        <div className={custom.inputDetails}>
            <section>
              <h3>Use When</h3>
              <p>The user is required to provide data to the system (for example, during a registration process or site search).</p>
            </section>
            <section>
              <h3>Why</h3>
              <p>The system should behave consistently; users should be able to learn the logic employed in form construction. Readability is an important factor in form design.</p>
            </section>
            <section>
              <h3>Solution</h3>
              <p>The system should behave consistently; users should be able to learn the logic employed in form construction. Readability is an important factor in form design.</p>
            </section>
            <section>
              <h6>Titling</h6>
              <p>All user input forms should be clearly titled. The main form title should describe the key task that the user is undertaking (e.g. Registration or Newsletter signup).
Where a form contains a number of form elements, and where these elements can be grouped by function or purpose, each form element group should be provided with a clear subtitle (e.g. a registration form might be grouped by Account details and Personal details).</p>
            </section>
            <section>
              <img src={require("../images/form_placeholder.png")} alt="placeholder"/>
            </section>
        </div>
      </div>
    );
  }
}


export default RenderFormElement;
