import React, {Component} from "react"
import "./NavigationElement.css"


class NavigationElement extends Component {

    constructor(props){
        super(props);
        this.state = { 
            clickedNavigationElement: true
        }
        // this.clickNavElt = this.clickNavElt.bind(this);
    }

    // clickNavElt(){
    //     this.setState({
    //         clickedNavElt: true
    //     })
    // }


    render(){
        return (
            <li className="NavigationElement" key={this.props.title} > 
                {/* {this.props.title}  */}
                <a href={'/' + this.props.title} 
                    // onClick={this.clickNavElt} 
                    // className={ (this.state.clickedNavElt ? "clickedNavigationElement" : null ) } 
                > {this.props.title}  </a>
            </li>
            )
    }
}


export default NavigationElement;