import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';
import '../../styles/toolbar.scss'
import Brush from '../../tools/Brush';
import Eraser from '../../tools/Eraser';
import Rect from '../../tools/Rect';

const ToolBar = () => {
    const changeColor = (e) => {
        toolState.setStrokeColor(e.target.value)
        toolState.setFillColor(e.target.value)
    }
    return ( 
        <div className='toolbar'>
        <button className='toolbar__btn brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas))}/>
        <button className='toolbar__btn rect' onClick={() => toolState.setTool(new Rect(canvasState.canvas))}/>
        <button className='toolbar__btn circle'/>
        <button className='toolbar__btn eraser' onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}/>
        <button className='toolbar__btn line'/>
        <input onChange={(e) => changeColor(e)} style={{marginLeft:10}} type='color'/>
        <button className='toolbar__btn undo'/>
        <button className='toolbar__btn redo'/>
        <button className='toolbar__btn save'/>
       
        </div>
     );
}
 
export default ToolBar;