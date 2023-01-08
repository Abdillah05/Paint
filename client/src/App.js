import Canvas from './components/canvas/Canvas';
import SettingBar from './components/settingBar/SettingBar';
import ToolBar from './components/toolBar/ToolBar';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path='/:id'>
            <ToolBar />
            <SettingBar />
            <Canvas />
          </Route>
          <Redirect to={`f${(+new Date).toString(16)}`}  replace />;
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
