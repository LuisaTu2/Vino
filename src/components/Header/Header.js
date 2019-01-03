import React, {Component} from "react"
import NavigationElements from "./NavigationElements/NavigationElements"
import "./Header.css"

class header extends Component {


    render(){
        return (
                <div className="Header"> 
                    <NavigationElements />
                </div>
        )
    }
}


export default header;