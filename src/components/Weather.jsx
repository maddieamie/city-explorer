import { Component } from "react";
import {Table, Row, Col} from "react-bootstrap";


export default class Weather extends Component{


  render(){
    const ww = this.props;

    return(

        <>
      

      <Row>
            {ww.Forecast.length > 0 &&
              ww.Forecast.map((day) => (
                <Col key={day.ts} xs={12} sm={6} md={4}>
                  <div className="weather-days">
                    <Table striped bordered hover variant="light" id="wtable">
                      <thead>
                        <tr>
                          <th>Date: {day.date}</th>
                          <th>{day.temp} °C</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={2}>Weather Description: {day.description}</td>
                        </tr>
                        <tr>
                          <td>Low Temp:</td>
                          <td>{day.low} °C</td>
                        </tr>
                        <tr>
                          <td>High Temp:</td>
                          <td>{day.high} °C</td>
                        </tr>
                        <tr>
                          <td>Moon Phase Percentage:</td>
                          <td>{day.moon} %</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
              ))}
          </Row>
              </>
          )
              }
            }

  