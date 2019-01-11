import React, {Component} from "react"
import "./Contact.css"

class Contact extends Component{
        constructor(props){
        super(props);

        this.state = { 
            userInput:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        console.log("hello!")
        };

    render(){
        return(
            <div className="contactContainer"> 
                <p> You can contact us at: <strong> vino@vino.vino </strong> </p> 
                <p> Please leave your comment here: </p>
                <br/>
                    <textarea type="text" />
                <br/>
                <button id="submitBtn" onClick={(e) => this.handleSubmit(e)}> 
                    Submit
                </button>
            </div>

        )
    }





}

export default Contact;