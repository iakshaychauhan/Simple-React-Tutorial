import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';

const Demo = (props) => {
  return <div className="main">
        <h1> Hello {props.name} </h1>
        <p> This is akshay chauhan </p>
        </div>

}




// class Demo extends Component{
//     render(){
//       return <div className="main">
//             <h1> Hello {this.props.name} </h1>
//             <p> This is akshay chauhan </p>
//             </div>
//     }
//
// }
export default Demo
