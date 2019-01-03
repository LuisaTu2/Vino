import React, {Component} from "react"
import "./Select1.css"


class Select1 extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(           

                <div className="products" >

                    <div className="dropdown">
                        <a href="#" onClick={this.props.clicked} name="wine" type="wine" className="dropbtn"> Wine</a>
                            <div className="dropdown-content" >
                                <a onClick={this.props.clicked} name="wine" type="red"> Red Wine</a>
                                <a onClick={this.props.clicked} name="wine" type="white"> White Wine</a>
                                <a onClick={this.props.clicked} name="wine" type="rose"> Rose' Wine</a>
                                <a onClick={this.props.clicked} name="wine" type="champagne"> Champagne </a>
                                <a onClick={this.props.clicked} name="wine" type="sparkling wine"> Sparkling Wine </a>
                                <a onClick={this.props.clicked} name="wine" type="dessert"> Dessert Wine</a>
                                <a onClick={this.props.clicked} name="wine" type="icewine"> Icewine</a>
                                <a onClick={this.props.clicked} name="wine" type="fortified"> Fortified Wine</a>
                                <a onClick={this.props.clicked} name="wine" type="specialty"> Specialty Wine</a>
                                {/* <a href="#" onClick={this.props.clicked} name="wine" type="giftWine"> Gift and Sampler Packs </a> */}
                            </div> 
                    </div>

                    <div className="dropdown">
                        <a href="#" onClick={this.props.clicked} name="beer" type="beer" className="dropbtn"> Beer & Cider </a>
                            <div className="dropdown-content" >
                                <a href="#" onClick={this.props.clicked} name="beer" type="malt"> Malt Beverages </a>
                                <a href="#" onClick={this.props.clicked} name="beer" type="lager"> Lager </a>
                                <a href="#" onClick={this.props.clicked} name="beer" type="ale"> Ale </a>
                                <a href="#" onClick={this.props.clicked} name="beer" type="hybrid">  Hybrid </a>
                                <a href="#" onClick={this.props.clicked} name="beer" type="specialty"> Specialty </a>
                                <a href="#" onClick={this.props.clicked} name="beer" type="radler"> Radler/Shandy </a>
                                <a href="#" onClick={this.props.clicked} name="beer" type="cider"> Cider </a>
                            </div> 
                    </div>

                    <div className="dropdown">
                        <a href="#" onClick={this.props.clicked} name="spirits" type="spirits" className="dropbtn"> Spirits</a>
                            <div className="dropdown-content" >
                                <a href="#" onClick={this.props.clicked} name="spirits" type="brandy"> Brandy </a>
                                <a href="#" onClick={this.props.clicked} name="spirits" type="cognac"> Cognac </a>
                                <a href="#" onClick={this.props.clicked} name="spirits" type="whisky"> Whisky </a>
                                <a href="#" onClick={this.props.clicked} name="spirits" type="vodka"> Vodka </a>
                                <a href="#" onClick={this.props.clicked} name="spirits" type="rum"> Rum </a>
                                <a href="#" onClick={this.props.clicked} name="spirits" type="gin"> Gin </a>
                                <a href="#" onClick={this.props.clicked} name="spirits" type="tequila"> Tequila </a>
                                <a href="#" onClick={this.props.clicked} name="spirits" type="liqueur"> Liqueur  </a>
                                <a href="#" onClick={this.props.clicked} name="spirits" type="shochu"> shochu </a>
                                <a href="#" onClick={this.props.clicked} name="spirits" type="eau-de-vie"> Eau-de-Vie </a>          
                            </div> 
                    </div>

                </div> // end of products duv
        ) // end of return
    }
}


export default Select1



{/* <div className="dropdown">
<button className="dropbtn"> Product</button>
<div className="dropdown-content">
<div className="products" >
    <a href="#" onClick={this.props.clicked} name="wine"> Wine</a>
    <a href="#" onClick={this.props.clicked} name="beer"> Beer & Ciders</a>
    <a href="#" onClick={this.props.clicked} name="spirits"> Spirits</a>
</div>
</div>
</div> */}

