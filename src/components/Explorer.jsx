import React from "react";
import { Button, Container, Form, ListGroup, Image } from "react-bootstrap";
import axios from "axios";

let API = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class Explorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: false,
      searchQuery: '',
      city: {},
      mapurl: ''
      
    }
  }
// yay 
  handleSearch = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${API}&q=${this.state.searchQuery}&format=json`;

  axios.get(url)
    .then(response => {
      const cityData = response.data[0];

      this.setState({ city: cityData, displayContent: true });

      
      const mapurl = `https://maps.locationiq.com/v3/staticmap?key=${API}&center=${cityData.lat},${cityData.lon}&zoom=11&size=450x450&format=json&maptype=png&markers=icon:small-purple-cutout|${cityData.lat},${cityData.lon}`;
      this.setState({ mapurl }); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  }


  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSearch}>
          <Form.Control onChange={(e) => this.setState({ searchQuery: e.target.value })} type="text" placeholder="Enter city...." />
          <Button type='submit' variant="flat" size="xxl" variant="info" >Explore!</Button>
        </Form>

        {Object.keys(this.state.city).length > 0 &&

          <>
          <Image src={this.state.mapurl} alt={this.state.city.display_name} roundedCircle />
          <ListGroup>
            <ListGroup.Item variant="success">{this.state.city.display_name}</ListGroup.Item>
            <ListGroup.Item variant="warning">Lat: {this.state.city.lat}</ListGroup.Item>
            <ListGroup.Item variant="info">Lon: {this.state.city.lon}</ListGroup.Item>
              
          </ListGroup>
            
          </>
        }

      </Container>
    )
  }
}

export default Explorer;