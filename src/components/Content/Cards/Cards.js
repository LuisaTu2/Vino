import React, {Component} from "react"
import "./Cards.css"
import Card from "./Card/Card"
// import axios from "axios"
import $ from 'jquery';

class Cards extends Component {

    componentDidMount(){
        console.log("componentDidMount for crying out loud")
 
    } // end of ComponentDidMount


    render() {
    
    let products = [...this.props.products];
    let prods = [];

    products.map( (p) => {
        prods.push( <Card key={p.id}  name={p.name} img={p.img} tastingNote={p.tastingNote}/> )
    });

    console.log(prods);
    
        return(
            <ul className="Cards"> 
                {prods}
            </ul>
        )
    }

}

export default Cards;




// $.ajax({
//     url: 'https://lcboapi.com/products?access_key=MDo3ZTdkYjIxYS05Njk4LTExZTgtYTUxYi1iZmIwYzk1OGNiN2M6Q1kwVDFEaXVuWW9ZY0EzeDhudHBsTERFY3pTUnhRSlpXcHU1',
//     headers: {
//       "Authorization": 'Token MDo3ZTdkYjIxYS05Njk4LTExZTgtYTUxYi1iZmIwYzk1OGNiN2M6Q1kwVDFEaXVuWW9ZY0EzeDhudHBsTERFY3pTUnhRSlpXcHU1',

//     //   "Access-Control-Allow-Origin": "https://localhost:3000", 
//     //   "Access-Control-Allow-Options": " POST, GET, OPTIONS, DELETE",
//     //   "Origin": "https://localhost:3000"
//     }
//   }).then(function(data) {
//     console.log(data);
//   });
// Authorization: Token token="myLCBOAPIaccessKey",
// let access_key = "MDo3ZTdkYjIxYS05Njk4LTExZTgtYTUxYi1iZmIwYzk1OGNiN2M6Q1kwVDFEaXVuWW9ZY0EzeDhudHBsTERFY3pTUnhRSlpXcHU1";
//    axios.get("http://lcboapi.com/products", {
//             headers: {
//                 // "Authorization": "MDo3ZTdkYjIxYS05Njk4LTExZTgtYTUxYi1iZmIwYzk1OGNiN2M6Q1kwVDFEaXVuWW9ZY0EzeDhudHBsTERFY3pTUnhRSlpXcHU1",
//                 // "Access-Control-Allow-Origin": "*"
//                 crossdomain: true
//             }
//             })
//    .then( res => console.log("The response is: " , res))

// $.ajax({
//     url: "https://lcboapi.com/products?access_key=MDo3ZTdkYjIxYS05Njk4LTExZTgtYTUxYi1iZmIwYzk1OGNiN2M6Q1kwVDFEaXVuWW9ZY0EzeDhudHBsTERFY3pTUnhRSlpXcHU1",
//     type: "GET",
//     // crossdomain: true,

//     //     "Authorization": "Token MDo3ZTdkYjIxYS05Njk4LTExZTgtYTUxYi1iZmIwYzk1OGNiN2M6Q1kwVDFEaXVuWW9ZY0EzeDhudHBsTERFY3pTUnhRSlpXcHU1",
//         "Access-Control-Allow-Origin": "localhost:3000",
//         "Access-Control-Allow-Headers": "x-requested-with", 
//     //     // crossdomain: true
//     // xhrFields: {
//     //     withCredentials: true
//     // },
//     //data: JSON.stringify(somejson),
//     dataType: "json",
//     success: function (response) {
//         var resp = JSON.parse(response)
//         alert(resp.status);
//     },
//     error: function (xhr, status) {
//         alert("error");
//     }
// });
