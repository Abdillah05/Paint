import '../../styles/canvas.scss'
import {observer} from "mobx-react-lite";
import { useEffect, useRef, useState } from 'react';
import canvasState from '../../store/canvasState';
import  {Modal, Button} from "react-bootstrap";
import toolState from '../../store/toolState';
import {useParams} from "react-router-dom"
import Brush from '../../tools/Brush';
const Canvas = observer(() => {

    const params = useParams();
    const canvasRef = useRef();
    const userNameRef = useRef();
const [modal, setModal] = useState(true);

    useEffect(() => {
canvasState.setCanvas(canvasRef.current)
toolState.setTool(new Brush(canvasRef.current))
    },[]);

    useEffect(() => {
        if(canvasState.userName){

            const socket = new WebSocket('ws://localhost:5005/')
            socket.onopen = () => {
                console.log('success connection');
                socket.send(JSON.stringify({
                    id:params.id,
                    userName: canvasState.userName,
                    method:'connection',
                }))
            }
        }
    },[canvasState.userName])

const moseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL())
    
}
const connectHandler = () => {
canvasState.setUserName(userNameRef.current.value)
setModal(false)
}

    return ( 
        <div className='canvas'>
            <Modal show={modal} onHide={() => {}}>
        <Modal.Header >
          <Modal.Title>insert your name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type='text'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => connectHandler()} ref={userNameRef}>
            Go on
          </Button>
          
        </Modal.Footer>
      </Modal>
        <canvas onMouseDown={() => moseDownHandler()} ref={canvasRef} width={600} height={400}/>
       
        </div>
     );
})
 
export default Canvas;