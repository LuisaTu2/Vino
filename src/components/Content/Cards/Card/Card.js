import React, {Component} from "react"
import "./Card.css"
import noIMG from "../../../../assets/noImage.png"

class Card extends Component {

    
    render(){
        let img = "";
        if(this.props.img){
            img = this.props.img;
        } 
        else {
            img = noIMG;
        }


        return(
          
            <li className="Product" onClick={this.showSpecsHandler}>
                    <img src={img}  className="ProductImg" />
                   
                    <p className="ProductName"> 
                      {this.props.name}
                    </p>
                    <span
                        className={"popuptext "} 
                        id="popuText"
                        > 
                        <p className="nameTitle"> <strong> {this.props.name} </strong> </p> 
                        <p> <strong> Alcohol Content: </strong>  {this.props.specs[3]/100 } %  </p> 
                        <p> <strong> Serving Suggestion: </strong> {this.props.specs[1]} </p>
                        <p> <strong> Style: </strong>  {this.props.specs[2]} </p>
                        {/* <p> <strong> Tasting Note: </strong>  {this.props.specs[0]} </p> */}
                    </span>  
            </li>
        )
    }

}

export default Card;
