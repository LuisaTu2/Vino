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
        console.log(name, type, page);
        $.ajax({
            url: this.state.url +"&q="+ name +"&q="+ type + "&page=" + page,
            dataType: 'jsonp',
        })
        .then((d)  => {
            this.setState({ 
                data: d.result,
                currentPage: d.pager.current_page,
                total_pages: d.pager.total_pages,
                is_final_page: d.pager.is_final_page,
                is_first_page: d.pager.is_first_page,
                first_rendering: false
            }); 
        });

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
// fetch("../../data/redwine.json")  
// .then(res => res.json())          // convert to plain text
// .then(d => console.log(d))  // then log it out
// // .then((res) => res.json())
// // .then((d) => {
// //   console.log("Red wine data: ", JSON.stringify(d));
// // }).catch(error => console.error('Error:', error))
// // .then(response => console.log('Success:', JSON.stringify(response)));
       
