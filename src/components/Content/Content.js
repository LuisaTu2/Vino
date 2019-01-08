import React, {Component} from "react";
import "./Content.css";
import $ from "jquery";
import Cards from "./Cards/Cards";
import Select1 from "./Select1/Select1";
import muskoka from "../../assets/muskoka.jpg"
import Aux from "../../containers/hoc/hoc"
import PageSelection from "./PageSelection/PageSelection"

// Importing Wine JSON local files
import wine_p1 from "./data/wine_p1.json"
import wine_p2 from "./data/wine_p2.json"
import wine_p3 from "./data/wine_p3.json"
import wine_red_p1 from "./data/wine_red_p1.json"
import wine_white_p1 from "./data/wine_white_p1.json"
import wine_rose_p1 from "./data/wine_rose_p1.json"
import wine_champagne_p1 from "./data/wine_champagne_p1.json"
import wine_sparkling_p1 from "./data/wine_sparkling_p1.json"
import wine_dessert_p1 from "./data/wine_dessert_p1.json"
import wine_icewine_p1 from "./data/wine_icewine_p1.json"
import wine_fortified_p1 from "./data/wine_fortified_p1.json"
import wine_specialty_p1 from "./data/wine_specialty_p1.json"

// Importing Beers and Ciders JSON local files
import beer_p1 from "./data/beer_p1.json"
import beer_malt_p1 from "./data/beer_malt_p1.json"
import beer_lager_p1 from "./data/beer_lager_p1.json"
import beer_ale_p1 from "./data/beer_ale_p1.json"
import beer_hybrid_p1 from "./data/beer_hybrid_p1.json"
import beer_specialty_p1 from "./data/beer_specialty_p1.json"
import beer_radler_p1 from "./data/beer_radler_p1.json"
import beer_cider_p1 from "./data/beer_cider_p1.json"

// Importing Spirits JSON local files
import spirits_p1 from "./data/spirits_p1.json"
import spirits_brandy_p1 from "./data/spirits_brandy_p1.json"
import spirits_cognac_p1 from "./data/spirits_cognac_p1.json"
import spirits_whisky_p1 from "./data/spirits_whisky_p1.json"
import spirits_vodka_p1 from "./data/spirits_vodka_p1.json"
import spirits_rum_p1 from "./data/spirits_rum_p1.json"
import spirits_gin_p1 from "./data/spirits_gin_p1.json"
import spirits_tequila_p1 from "./data/spirits_tequila_p1.json"
import spirits_liqueur_p1 from "./data/spirits_liqueur_p1.json"
import spirits_shochu_p1 from "./data/spirits_shochu_p1.json"
import spirits_eaudevie_p1 from "./data/spirits_eaudevie_p1.json"



class Content extends Component {
    
    constructor(props){
        super(props);

        this.state = { 
            firstRenderingPic: muskoka,
            url:'http://lcboapi.com/products?where_not=is_dead,is_discontinued' ,
            data: [],
            currentPage: 0, 
            total_pages: 0,
            is_final_page: false,
            is_first_page: false,
            first_rendering: true, 
        }

        this.getProducts = this.getProducts.bind(this);
        this.filterType = this.filterType.bind(this);
        this.pageHandler= this.pageHandler.bind(this);
    }

    getProducts(category, type, page){ 
        
        console.log(category, type);
        var t = "";

        if (category === "wine"){

            if (type === "wine"){
                t = wine_p1.result;
            } else if (type === "red"){
                t = wine_red_p1.result;
            } else if (type === "white"){
                t = wine_white_p1.result;
            } else if (type === "rose") {
                t = wine_rose_p1.result;
            } else if (type === "champagne") {
                t = wine_champagne_p1.result;
            } else if (type === "sparkling wine") {
                t = wine_sparkling_p1.result;
            } else if (type === "dessert") {
                t = wine_dessert_p1.result;
            } else if (type === "icewine") {
                t = wine_icewine_p1.result;
            } else if (type === "fortified") {
                t = wine_fortified_p1.result;
            } else if (type === "specialty") {
                t = wine_specialty_p1.result;
            }
        } else if (category === "beer") {
            if (type === "beer"){
                t = beer_p1.result;
            } else if (type === "malt"){
                t = beer_malt_p1.result;
            } else if (type === "lager"){
                t = beer_lager_p1.result;
            } else if (type === "ale"){
                t = beer_ale_p1.result;
            } else if (type === "hybrid"){
                t = beer_hybrid_p1.result;
            } else if (type === "specialty"){
                t = beer_specialty_p1.result;
            } else if (type === "radler"){
                t = beer_radler_p1.result;
            } else if (type === "cider"){
                t = beer_cider_p1.result;
            }
        } else if (category === "spirits") {
            if (type === "spirits"){
                t = spirits_p1.result;  
            } else if (type === "brandy"){
                t = spirits_brandy_p1.result;
            } else if (type === "cognac"){
                t = spirits_cognac_p1.result;
            } else if (type === "whisky"){
                t = spirits_whisky_p1.result;
            } else if (type === "vodka"){
                t = spirits_vodka_p1.result;
            } else if (type === "rum"){
                t = spirits_rum_p1.result;
            } else if (type === "gin") {
                t = spirits_gin_p1.result;
            } else if (type === "tequila"){
                t = spirits_tequila_p1.result;
            } else if (type === "liqueur"){
                t = spirits_liqueur_p1.result;
            } else if (type === "shochu") {
                t = spirits_shochu_p1.result;   
            } else if (type === "eau-de-vie"){
                t = spirits_eaudevie_p1.result;
            }

        }

        this.setState({
            data: t,
            first_rendering: false
        })

    } // end of getProducts


    filterType(e){            
        const n = e.target.name;
        const t = e.target.type;
        this.setState({
            name:  n, 
            type: t
        });
        this.getProducts(n, t, "");
    }

    pageHandler(e){
        const pageReq = e.target.name;
        let p = this.state.currentPage;
        let nextPage = p + 1;
        let prevPage = p - 1;
        let n = this.state.name;
        let t = this.state.type;
        
        if(pageReq === "next" && !this.state.is_final_page) {
            this.getProducts(n, t, nextPage );
        } else if (pageReq === "previous" && !this.state.is_first_page) {
            this.getProducts(n, t, prevPage );
        } else {
            console.log("cannot move!")
        }
    }


    render() {
        return (
            <div className="Content">
    
                <div className="ContentBody">
    
                    <div className="Side Left"> </div>
    
                    <div className="CardsArea">  

                        <div className="Filters">
                            <Select1 clicked={this.filterType} />                        
                        </div>

                        { this.state.first_rendering   
                            ? 
                            <div className="firstRenderingContainer"> 
                                <img src={this.state.firstRenderingPic} className="firstRenderingPic" /> 
                                <div className="firstRenderingText" > 
                                    The taste of <p> <strong>summer</strong> </p> is just a click away!
                                </div>
                            </div>
                            : 
                            <Aux>
                                <PageSelection 
                                    currentPage={this.state.currentPage} 
                                    n={this.state.name} 
                                    t={this.state.type} 
                                    pageH={this.pageHandler} 
                                    isFinalPage={this.state.is_final_page}
                                    isFirstPage={this.state.is_first_page}
                                />
                                <Cards 
                                    url={this.state.url} 
                                    products={this.state.data}
                                />
                            </Aux>
                        }
                      
                    </div>    {/* end of class CardsArea */}
                    
                    <div className="Side Right"></div>
    
                </div> {/* End of ContentBOdy */}
            </div>  // End of Content
        )
    }
}

export default Content





// References

// $.ajax({
//     url: this.state.url +"&q="+ name +"&q="+ type + "&page=" + page,
//     dataType: 'jsonp',
// })
// .then((d)  => {
//     this.setState({ 
//         data: d.result,
//         currentPage: d.pager.current_page,
//         total_pages: d.pager.total_pages,
//         is_final_page: d.pager.is_final_page,
//         is_first_page: d.pager.is_first_page,
//         first_rendering: false
//     }); 

//     // console.log(JSON.stringify(d));
// }); // end of then/ ajax call

//console.log(JSON.stringify(redwine));



