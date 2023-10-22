import { Component } from "react";
import { ListGroup } from "react-bootstrap";


export default class Listy extends Component{
    render(){
          
    return (
        <>
      <ListGroup>
        <ListGroup.Item variant="info">{this.props.city.display_name}</ListGroup.Item>
        <ListGroup.Item variant="warning">Lat: {this.props.city.lat}</ListGroup.Item>
        <ListGroup.Item variant="success">Lon: {this.props.city.lon}</ListGroup.Item>
      </ListGroup>
      </>
        )
    }
}

