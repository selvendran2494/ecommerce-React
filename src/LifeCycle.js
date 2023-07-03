import { data } from "jquery";
import { Component } from "react";

class LifeCycle extends Component{
// eslint-disable-next-line no-useless-constructor
constructor(){
    super();
    this.state = {
        data:{
            name:"selva"
        }
    }   
}
async componentDidMount(){ // for api call
    const data = await fetch("https://fakestoreapi.com/products/1");
    const json = await data.json();   
}
render(){
    return (
        <div style={{height:"100vh",textAlign:"center",margin:"20px",padding:"20px",fontSize:"30px"}}>Hi This is for LifeCycle!!!</div>
    )
}
}
export default LifeCycle;