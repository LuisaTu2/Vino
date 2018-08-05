import React from "react"
import "./NavigationElement.css"

// class NavigationElement extends Component {
const NavigationElement = (props) => {

        // let t = props.title;
    // render(){
        return (
            <li className="NavigationElement"> 
                {/* {this.props.title}  */}
                <a href={'/' + props.title}> {props.title} </a>
            </li>
            )
    // }
}


export default NavigationElement;