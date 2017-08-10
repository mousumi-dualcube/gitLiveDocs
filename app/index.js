import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/route';
import { overrideComponentTypeChecker } from 'pivot-ui/lib/utils/is-component-of-type';


const render = () => {
  ReactDOM.render(
    routes,
    document.getElementById('livedocs')
  );
};

if (process.env.NODE_ENV !== 'production') {
  overrideComponentTypeChecker((classType, reactElement) => (
    reactElement && (
      reactElement.type === classType
      || reactElement.type.name === classType.displayName
    )
  ));
  if (module.hot) {
    module.hot.accept('./views/Root', render);
    module.hot.accept('./components/RenderTab', render);
    module.hot.accept('./views/ReportsUi', render);
  }
}

render();