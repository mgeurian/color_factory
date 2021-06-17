import React from 'react';
import {
  Switch,
  Route, 
  Redirect
} from 'react-router-dom';
import ColorList from './ColorList';
import FilterColorDetails from './FilterColorDetails';

function Routes({colors}) {
  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colors} />
      </Route>
      <Route path="/colors/:name">
        <FilterColorDetails colors={colors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  )
}

export default Routes;