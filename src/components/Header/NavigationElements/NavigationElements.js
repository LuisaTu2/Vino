import React, {Component} from "react"
import "./NavigationElements.css"
import NavigationElement from "./NavigationElement/NavigationElement"

class NavigationElements extends Component { 
    render(){
        return (
            <ul className="NavigationElements"> 
                <NavigationElement title="Home"> </NavigationElement >   
                <NavigationElement title="About"> </NavigationElement >   
                <NavigationElement title="Products"> </NavigationElement >   
                <NavigationElement title="Stores"> </NavigationElement >   
                <NavigationElement title="Contact"> </NavigationElement >   
            </ul> 
        )
    }
}

export default NavigationElements;