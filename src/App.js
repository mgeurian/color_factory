import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ColorList from './ColorList';
import Color from './Color';
import NewColor from './NewColor';



function App() {
  return (
    <BrowserRouter>
      <NavBar colors={colors} />
      <Switch>

        <Route exact path='/colors'>
          <ColorList colors={colors} />
        </Route>

        <Route exact path='/colors/new'>
          <NewColor />
        </Route>

        <Route path='/colors/:name'>
          <Color />
        </Route>

        <Redirect to="/colors"/>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
