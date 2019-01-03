import React from "react"
import "./PageSelection.css"

function PageSelection(props){
    let type = "";
    let t = props.t;

    if(t==="wine" || t==="spirits" || t==="beer" ) { type = " All"; }
    else { type=t }

    console.log(props.isFirstPage, props.isFinalPage);

    return (
        <div className="PageSelection"> 
            <div className="NameTypeSelection"> {props.n} >> {type}  </div>
            <div className="PageDisplay"> 
                Page {props.currentPage}  
                <a  className={ "previous round " + (props.isFirstPage ? "disable" :"enable" )   }
                    name="previous" 
                    onClick={props.pageH}> 
                    &#8249;
                </a>
                <a className={ "next round " + (props.isFinalPage ? "disable" : "enable" )   }
                    name="next" 
                    onClick={props.pageH}>
                    &#8250;
                </a>
            </div>
        </div>
    )

}


export default PageSelection;