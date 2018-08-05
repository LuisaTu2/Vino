import React from "react"
import "./Content.css"
import Cards from "./Cards/Cards"

const products = 
    [
    {
        id: "547299",
        name: "Bachelder Wismer-Foxcroft N. 2 Chardonnay 2015",
        origin: "Canada, Ontario",
        img: "https://dx5vpyka4lqst.cloudfront.net/products/547299/images/thumb.png",
        tastingNote: "Bottled three weeks before tasting and already cohesive and knit. From the lower section of Twenty Mile Bench's Foxcroft Vineyard. Beautiful directness, with brisk mineral spicing driving perfumed pear, yellow apple skin, lemon blossom scenting a lovely weighted palate bedded with stony lees. This has a lovely vibrancy brightening the wood, still knees and knuckles in youth but will merge and melt with the wine in time (which it certainly has ahead of it). Score - 91. (Treve Ring, gismondionwine.com, Aug. 23, 2017)"

    },
    {
        id: "515163",
        name: "Petra Potenti Cabernet Sauvignon 2013",
        origin: "Italy, Tuscany",
        img:  "https://dx5vpyka4lqst.cloudfront.net/products/515163/images/thumb.png",
        tastingNote:  "Pure black currant and cherry flavors take hold of this red, accented by herb and spice notes. Vibrant and harmonious, with a lingering aftertaste of fruit, herbs and mineral. Cabernet Sauvignon. Drink now through 2024. Score - 93. (Bruce Sanderson, winespectator.com, March 31, 2017)"

    },
    {
        id: "441998",
        name: "Columbia Crest H3 Chardonnay 2014",
        origin: "USA, Washington",
        img: "https://dx5vpyka4lqst.cloudfront.net/products/441998/images/thumb.png",
        tastingNote: "Fresh, focused and inviting, with lifted pear, apple and honey flavors, moving smoothly into a long and expressive finish. Drink now through 2019. Score - 89. (Harvey Steiman, winespectator.com, May 31, 2016)"

    }
];

const Content = (props) => {
    return (
        <div className="Content">

            <div className="ContentBody">

                <div className="Side">
                </div>

                <div className="CardsArea">  
                    <div className="ContentTitle"> Red Wines </div>
                    <Cards products={products}/>
                </div>
                
                <div className="Side">
                </div>

            </div> {/* End of ContentBOdy */}
        </div>  // End of Content
    )
}

export default Content