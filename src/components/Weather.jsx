import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

class Weather extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      weatherD: []
    }
  }

  // create method showList to make request
  showList = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER}weather`, {
        params: {
          // eslint-disable-next-line react/prop-types
          searchQuery: this.props.searchQuery,
          // eslint-disable-next-line react/prop-types
          lon: this.props.lon,
          // eslint-disable-next-line react/prop-types
          lat: this.props.lat,
        },
      });
  
      this.setState({ weatherD: response.data });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  



  render(){
    return(
    <>
     
     
      <Button variant="info" size="lg" id="weather" onClick={this.showList}>Show Me The Weather Report!</Button>

      {this.state.weatherD.length > 0 &&
  this.state.weatherD.map(day => (
    <div key={day.ts}>
      <p>Date: {day.datetime}</p>
      <p>Temperature: {day.temp} °C</p>
      <p>Weather Description: {day.weather.description}</p>
    </div>
        ))
        }

    </>
    )

  }
}

export default Weather;