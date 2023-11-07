import { Component } from "react";
import {Row, Col} from "react-bootstrap";
import WeatherDay from './WeatherDay'; 

export default class Weather extends Component{


  render(){

      const { Forecast } = this.props;

      return (
        <>
          <Row>
            {Forecast.length > 0 &&
              Forecast.map((day) => (
                <Col key={day.ts} xs={12} sm={6} md={4}>
                  <WeatherDay day={day} /> 
                </Col>
              ))}
          </Row>
        </>
          )
              }
            }

  