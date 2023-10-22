import React from "react";
import { Container, Image, Button} from "react-bootstrap";
import CityForm from './CityForm.jsx';
import Listy from './Listy.jsx';
import AlertComp from './AlertComp.jsx';
import Weather from './Weather.jsx';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

let API = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class Explorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCity: false,
      displayWeather: false,
      searchQuery: '',
      city: {},
      lat: '',
      lon: '',
      mapurl: '',
      error: null,
      Forecast: {}
    }
  }
// yay 
handleSearch = async (e) => {
  e.preventDefault();
  let url = `https://us1.locationiq.com/v1/search?key=${API}&q=${this.state.searchQuery}&format=json`;

  axios.get(url)
    .then(response => {
      const cityData = response.data[0];

      this.setState({ city: cityData, lat: cityData.lat, lon: cityData.lon, displayCity: true, error: null });

      const mapurl = `https://maps.locationiq.com/v3/staticmap?key=${API}&center=${cityData.lat},${cityData.lon}&zoom=11&size=450x450&format=json&maptype=png&markers=icon:small-purple-cutout|${cityData.lat},${cityData.lon}`;
      this.setState({ mapurl }); 
    })
    .catch(error => {
      console.error('Error:', error);
      this.setState({ error: `An error occurred: ${error.message}. Code: ${error.code}.` })
    });
}

showList = async () => {
  try {
    const { searchQuery } = this.state;
    const { lon, lat } = this.state.city;

    const res = await axios.get(`${import.meta.env.VITE_SERVER}weather?searchQuery=${searchQuery}&lon=${lon}&lat=${lat}`);
    console.log(res);
    
    this.setState({ Forecast: res.data, displayWeather: true, error: null });
  } catch (error) {
    console.error('Error:', error);
    this.setState({ error: `An error occurred: ${error.message}. Code: ${error.code}.` });
  }
}
  

  handleInputChange = async (e) => {
    this.setState({ searchQuery: e.target.value });
  }


  render() {
    return (
      <>
     
      <Container id="jade">
        
       <CityForm 
           handleSearch={this.handleSearch}
           searchQuery={this.state.searchQuery}
           handleInputChange={this.handleInputChange}
           />
       
        {this.state.displayCity && Object.keys(this.state.city).length > 0 &&

          <>
          
          <Image src={this.state.mapurl} alt={this.state.city.display_name} rounded id="map" />
          
          <Listy city={this.state.city} />
          </>
        }
         
      {this.state.error && (
             
        <AlertComp 
        errormessage={this.state.error} />
      )}

      
      </Container>
      <Container id="extras">
      <div className="btn-group" id="extrasearch" role="group">
      <Button variant="info" size="md" id="weatherbutton" onClick={this.showList}>Show me my Forecast.</Button>
      <Button variant='info' size="md" id="moviebutton" > Show me movies! </Button>
        </div>

        {this.state.displayWeather && (
            <Weather Forecast={this.state.Forecast} />
          )} 
      
      </Container>
      </>
    )}
}


export default Explorer;