import { Component } from "react";
import { Form, Button} from "react-bootstrap";



export default class CityForm extends Component{
    render(){
        return (
            <>
            <div>
        <Form onSubmit={this.props.handleSearch}>
        <Form.Control  id= "formy" onChange={this.props.handleInputChange} type="text" placeholder="Enter city...." size="lg" variant="info" />
        <div className="d-grid">
        <Button type='submit' variant="info" size="lg" id="lil">Explore!</Button>
        </div>
        
        </Form>
        </div>
        </>
        )
    }
}

