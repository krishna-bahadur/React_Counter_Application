import {Component} from "react";
class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter:0,
        }
    }
    Increase(){
        this.setState({
            counter: this.state.counter + 1
        })
    }
    Reset(){
        this.setState({
            counter:0
        })
    }
    Decrease(){
        if(this.state.counter > 0){
            this.setState({
                counter:this.state.counter - 1
            })
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.Increase()}>Increase</button>
                <button onClick={()=>this.Reset()}>Reset</button>
                <button onClick={()=>this.Decrease()}>Decrease</button>
            </div>
        )
    }
}
export default Counter;