import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

let API = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class Explorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: false,
      searchQuery: '',
      city: {}
    }
  }

  handleSearch = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${API}&q=${this.state.searchQuery}&format=json`;
    // console.log(url)
    const response = await axios.get(url);
    console.log(response.data)
    
    this.setState({ city: response.data[0], displayContent: true })
  }


  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSearch}>
          <Form.Control onChange={(e) => this.setState({ searchQuery: e.target.value })} type="text" placeholder="Enter city...." />
          <Button type='submit' >Explore!</Button>
        </Form>

        {Object.keys(this.state.city).length > 0 &&

          <>
            <p>{this.state.city.display_name}</p>
            <p>Lat: {this.state.city.lat}, Lon: {this.state.city.lon}</p>
          </>
        }

      </Container>
    )
  }
}

export default Explorer;