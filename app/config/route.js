import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Root from '../views/Root'
import Pattern from '../views/Patterns'
import Basic from '../views/Basic'
import FormElements from '../views/FormElements'
import ReportsUi from '../views/ReportsUi'

const routes = (
  <Router onUpdate={() => window.scrollTo(0, 0)}  history={hashHistory}>
    <Route path='/' component={Root}>
      <IndexRoute component={Pattern} />
      <Route path='basic' header='Basic' component={Basic} />
      <Route path='formelement' header='Basic' component={FormElements} />
      <Route path='reportsui' header='Basic' component={ReportsUi} />
    </Route>
  </Router>
);

export default routes