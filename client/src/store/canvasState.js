import{makeAutoObservable} from 'mobx'
class CanvasState{
    canvas = null
    constructro(){
        makeAutoObservable(this)
    }
    setCanvas(canvas){
        this.canvas = canvas
    }
}
export default new CanvasState()