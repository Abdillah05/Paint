import{makeAutoObservable} from 'mobx'
class ToolState{
     tool = null
    constructro(){
        makeAutoObservable(this)
    }
    setTool(tool){
        this.tool = tool
    }
}
export default new ToolState()