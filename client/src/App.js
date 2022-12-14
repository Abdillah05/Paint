import Canvas from './components/canvas/Canvas';
import SettingBar from './components/settingBar/SettingBar';
import ToolBar from './components/toolBar/ToolBar';
import './styles/app.scss'

function App() {
  return (
    <div className='app'>
    <ToolBar/>
    <SettingBar/>
    <Canvas/>
    </div>
  
  );
}

export default App;
