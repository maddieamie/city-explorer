import { Component } from "react";
import {Table} from "react-bootstrap";


export default class Weather extends Component{


  render(){
    const ww = this.props;

    return(

    <>
   

      {ww.Forecast.length > 0 && 
        ww.Forecast.map(day => 
          <>
          <div className="weather-days">
          <Table striped bordered hover variant="light" id="wtable" key={day.ts}>
            <thead>
            <tr>
            <th> Date: {day.date}</th>
            <th>{day.icon}</th>
            </tr>
            </thead>
            <tbody>
            <tr><td colSpan={2}>Weather Description: {day.description}</td></tr>
            <tr><td>Low Temp: </td><td>{day.low} °C</td></tr>
            <tr><td>High Temp: </td><td>{day.high} °C</td></tr>
            <tr><td>Average Temp: </td><td>{day.temp} °C</td></tr>

            </tbody>
            </Table>
            </div>
          </>
          )
      }
    </>
    )

  }
}


  