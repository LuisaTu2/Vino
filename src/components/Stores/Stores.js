import React, {Component} from "react";
import $ from "jquery"
import Store from "./Store/Store"
import "./Stores.css"
import {Map, Marker,  GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends React.Component {
    
    constructor(props){
        super(props);

        this.state = { 
            url: 'http://lcboapi.com/stores?where_not=is_dead&q="Windsor"',
            data: [],
            lat: "",
            long: "",
            stores: ["A", "B", "C"],
            coords: [],
            c: []
        }     
    } // end of constructor

    componentDidMount(){
        $.ajax({
            url: this.state.url,
            dataType: 'jsonp'
        }).then( (d) => {
            console.log(d.result);
            d.result.forEach( (item) =>  this.state.coords.push({lat:item.latitude, lng: item.longitude}) )  
            this.setState({
                data: d.result.map( (item) =>  <ul key={item.id}> {item.name} </ul>  ),
                c: this.state.coords.map( (coord, i) => <Marker key={i} position={coord} >  </Marker>  )         
            })
        }
        )// end of ajax call and promise
    }


   
    render() {
        const mapStyle = {
                width: '50vw',
                height: '60vh'
        }
        return (
            <div className="stores">

                <div className="storesText"> You can find us at the following locations:  </div>
                
                <ul> {this.state.data}</ul>
            
                <div style={mapStyle}>
                    <Map 
                        google={this.props.google} 
                        initialCenter={{lat: 42.27, lng: -83.0}} 
                        zoom={12}
                        >
                        
                        {this.state.c}                       
                        
                    </Map> 

                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDoKUQoxuJYwJ6eMIq8Gn33cf-LalCl7GA'
  })(MapContainer)