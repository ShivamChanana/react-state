import React from "react"

//stateless component - pure components -it render the ui based on the props
//props - generates the ui
//advantages - immutable
//Functional stateless component - just javascript functions
//it is easier to execute functions

const Counter=(props)=>{
    console.log("inner counter", props)
    return(
    <div>
<h1>Count Value: {props.count}</h1>
    <br/>
    <button onClick = {props.incrementCount}>Inc</button>
    <button onClick = {props.decrementCount}>Dec</button>
    <button onClick = {props.resetCount}>Reset</button>

        </div>
    )
}

// class Counter extends React.Component{
//     render(){
//         return(
//             <div>
//     <h1>Count Value: {this.props.count}</h1>
//     <button onClick = {this.props.incrementCount}>Inc</button>
//     <button onClick = {this.props.decrementCount}>Dec</button>
//     <button onClick = {this.props.resetCount}>Reset</button>
//             </div>
//         )
//     }
// }


export default Counter