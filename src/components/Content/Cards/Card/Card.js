import React, {Component} from "react"
import "./Card.css"


class cards extends Component {
    render(){
        let img = this.props.img;
        const divStyle = {
            color: 'blue',
            backgroundImage: 'url(' + this.props.img + ')',
            backgroundRepeat: 'noRepeat'
          };

        return(
            <a className="textOverImage" style={divStyle} data-title={this.props.name} data-text={this.props.tastingNote} >
                {/* <img src={this.props.img}  className="ProductImg" />
                
                    <p className="ProductName"> 
                      {this.props.name}
                    </p>
                    <p className="ProductTastingNote"> 
                        {this.props.tastingNote}
                    </p>  */}
                
            </a>
        )
    }

}

export default cards;
