import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ColorNav from './ColorNav.js';
import ColorList from './ColorList';
import Color from './Color';
import NewColor from './NewColor';



function App({colors}) {
  return (
    <BrowserRouter>
      {/* <ColorNav colors={colors} />
      <Switch>
        <Route exact path='/colors'>
          <ColorList colors={colors} />
        </Route> */}
        <Route exact path='/colors/red'>
          <Color />
        </Route>
        {/* <Route exact path='/colors/new'>
          <NewColor />
        </Route> */}

        {/* <Route path='/colors/:name'>
          <Color />
        </Route> */}

        {/* <Redirect to="/colors" />
      </Switch> */}
    </BrowserRouter>


  );
}

export const colors = [
  {
    name: "red",    
  },
  {
    name: "yellow",
  },
  {
    name: "blue",
  },
  {
    orange: "orange",
  },
  {
    name: "green",
  },
  {
    name: "purple",
  },

]

App.defaultProps = { colors };

export default App;
