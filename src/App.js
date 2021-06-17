import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ColorNav from './ColorNav.js';
import Routes from './Routes';

function App({colors}) {
  return (
    <div>
    <BrowserRouter>
      <ColorNav colors={colors} />
      <div>
        <Routes colors={colors} />
      </div>
    </BrowserRouter>      
    </div>
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
    name: "orange",
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
