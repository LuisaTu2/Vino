import React, {Component} from "react";
import "./Content.css";
import $ from "jquery";
import Cards from "./Cards/Cards";
import Select1 from "./Select1/Select1";
import muskoka from "../../assets/muskoka.jpg"
import Aux from "../../containers/hoc/hoc"
import PageSelection from "./PageSelection/PageSelection"

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
            first_rendering: true
        }

        this.getProducts = this.getProducts.bind(this);
        this.filterType = this.filterType.bind(this);
        this.pageHandler= this.pageHandler.bind(this);
    }

    getProducts(name, type, page){
        // console.log(name, type, page);
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
        // });

       
        fetch("../../data/redwine.json")  
        .then(res => res.json())          // convert to plain text
        .then(d => console.log(d))  // then log it out
        // .then((res) => res.json())
        // .then((d) => {
        //   console.log("Red wine data: ", JSON.stringify(d));
        // }).catch(error => console.error('Error:', error))
        // .then(response => console.log('Success:', JSON.stringify(response)));
       


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
// const products = 
//     [
//     {
//         id: "547299",
//         name: "Bachelder Wismer-Foxcroft N. 2 Chardonnay 2015",
//         origin: "Canada, Ontario",
//         img: "https://dx5vpyka4lqst.cloudfront.net/products/547299/images/thumb.png",
//         tastingNote: "Bottled three weeks before tasting and already cohesive and knit. From the lower section of Twenty Mile Bench's Foxcroft Vineyard. Beautiful directness, with brisk mineral spicing driving perfumed pear, yellow apple skin, lemon blossom scenting a lovely weighted palate bedded with stony lees. This has a lovely vibrancy brightening the wood, still knees and knuckles in youth but will merge and melt with the wine in time (which it certainly has ahead of it). Score - 91. (Treve Ring, gismondionwine.com, Aug. 23, 2017)"

//     },
//     {
//         id: "515163",
//         name: "Petra Potenti Cabernet Sauvignon 2013",
//         origin: "Italy, Tuscany",
//         img:  "https://dx5vpyka4lqst.cloudfront.net/products/515163/images/thumb.png",
//         tastingNote:  "Pure black currant and cherry flavors take hold of this red, accented by herb and spice notes. Vibrant and harmonious, with a lingering aftertaste of fruit, herbs and mineral. Cabernet Sauvignon. Drink now through 2024. Score - 93. (Bruce Sanderson, winespectator.com, March 31, 2017)"

//     },
//     {
//         id: "441998",
//         name: "Columbia Crest H3 Chardonnay 2014",
//         origin: "USA, Washington",
//         img: "https://dx5vpyka4lqst.cloudfront.net/products/441998/images/thumb.png",
//         tastingNote: "Fresh, focused and inviting, with lifted pear, apple and honey flavors, moving smoothly into a long and expressive finish. Drink now through 2019. Score - 89. (Harvey Steiman, winespectator.com, May 31, 2016)"

//     }
// ];