import React, {Component} from "react"
import "./About.css"
import wineHills from "../../assets/wineHills.jpg"
import grapes from "../../assets/grapes.png"

class About extends Component{

    render(){
        return(
            <div className="aboutContainer"> 
                <div className="aboutDiv1">
                    <div className="aboutDiv1Text">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni... 
                    </div>
                    <div className="aboutDiv1Pic">
                        <img src={wineHills} />
                    </div>
                </div>

                <div className="aboutDiv2"> 
                    <div className="aboutDiv2Pic">
                        <img src={grapes}/>
                    </div>
                    <div className="aboutDiv1Text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni... 
                    </div>
                </div>
            </div>
        )
    }
}

export default About;