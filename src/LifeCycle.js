import { data } from "jquery";
import { Component } from "react";

class LifeCycle extends Component{
// eslint-disable-next-line no-useless-constructor
constructor(){
    console.log("--- Constructor Called ---");
    super();
    this.state = {
        githubUser:{
            name:"selva",
            location:"chennai"
        }
    }   
}
async componentDidMount(){ // for api call
    console.log("--- componentDidMount Called ---");
    // const data = await fetch("https://api.github.com/users/selvendran2494");
    // const json = await data.json();   
    // this.setState({
    //     githubUser : json
    // })
}
componentDidUpdate(){
    console.log("componentDidUpdate");
}
componentWillUnmount(){
    console.log("s");
}
render(){
    console.log("--- Render Called ---");
    // const {name,location}=this.state.githubUser;
    // console.log(name);
    // console.log(location);
    return (
        <div style={{height:"100vh",textAlign:"center",margin:"20px",padding:"20px",fontSize:"30px"}}>Name :{this.state.githubUser.name} || Location:{this.state.githubUser.location}</div>
    )
}
}
export default LifeCycle;