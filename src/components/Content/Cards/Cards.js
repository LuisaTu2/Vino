import React, {Component} from "react"
import "./Cards.css"
import Card from "./Card/Card"
import $ from 'jquery';

class Cards extends Component {

    constructor(props){
        super(props);
    } // end of constructor


    render() {
        let products = [...this.props.products];
        let prods = [];

        products.map( (p) => {

            let s = {};
            s = [
                p.tasting_note,
                p.serving_suggestion,
                p.style, 
                p.alcohol_content,
                p.volume_in_milliliters
            ]

            prods.push( 
                <Card key={p.id}  
                    name={p.name} 
                    img={p.image_thumb_url} 
                    specs={s}
                /> )
        });
        
        return(
            <ul className="Cards"> 
                {prods}
            </ul>
        )
    } // end of render

}

export default Cards;