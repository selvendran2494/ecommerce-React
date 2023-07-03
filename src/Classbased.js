// const Classbased = () =>{
// }
// export default Classbased

import { Component } from "react";

class Classbased extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    //this.state is a global state,State whole file (classbased.js)
    this.state = {
      isActive: true,
      imageName: "",
      isEdit: true,
      counter: 1,
    };
    console.log("Props Recieved", props);
  }
  count() {
    let counter = this.state.counter;
    counter++;
    this.setState = {
      counter: counter,
    };
  }
  render() {
    this.setState = {
      isActive: false,
    };
    return <div>Class based Component || {this.props.data}</div>;
  }
}
export default Classbased;
