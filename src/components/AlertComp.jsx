import { Component } from "react";
import {Alert } from "react-bootstrap";


export default class AlertComp extends Component{
    render(){
        return (
            <>
           <div>
          <Alert variant="danger">
        Oh no! {this.props.errormessage} Please try again by typing in a city in the US.
        </Alert>
        </div> 
            </>
        )
    }
}
