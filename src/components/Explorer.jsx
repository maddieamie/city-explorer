import React from "react";
import { Button, Container, Form, ListGroup, Image, Alert} from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

let API = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class Explorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: false,
      searchQuery: '',
      city: {},
      mapurl: '',
      error: null
    }
  }
// yay 
  handleSearch = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${API}&q=${this.state.searchQuery}&format=json`;

  axios.get(url)
    .then(response => {
      const cityData = response.data[0];

      this.setState({ city: cityData, displayContent: true, error: null });

      
      const mapurl = `https://maps.locationiq.com/v3/staticmap?key=${API}&center=${cityData.lat},${cityData.lon}&zoom=11&size=450x450&format=json&maptype=png&markers=icon:small-purple-cutout|${cityData.lat},${cityData.lon}`;
      this.setState({ mapurl }); 
    })
    .catch(error => {
      console.error('Error:', error);
      this.setState({ error: `An error occurred: ${error.message}. Code: ${error.code}.` })
    });
  
  }


  render() {
    return (
      <>
     
      <Container id="jade">
        
        <div>
        <Form onSubmit={this.handleSearch}>
        <Form.Control  id= "formy" onChange={(e) => this.setState({ searchQuery: e.target.value })} type="text" placeholder="Enter city...." size="lg" variant="info" />
        <div class="d-grid">
        <Button type='submit' variant="info" size="lg" id="lil">Explore!</Button>
        </div>
        
        </Form>
        </div>
       
        {Object.keys(this.state.city).length > 0 &&

          <>
          
          <Image src={this.state.mapurl} alt={this.state.city.display_name} rounded id="map" />
          
          
          <ListGroup>
          <ListGroup.Item variant="info">{this.state.city.display_name}</ListGroup.Item>
          <ListGroup.Item variant="warning">Lat: {this.state.city.lat}</ListGroup.Item>
          <ListGroup.Item variant="success">Lon: {this.state.city.lon}</ListGroup.Item>
              
          </ListGroup>
          </>
        }
         
      {this.state.error && (
             
        <div>
          <Alert variant="danger">
        Oh no! {this.state.error} Please try again by typing in a city in the US.
        </Alert>
        </div>
      )}

      </Container>
      
      </>
    )
  }
}

export default Explorer;