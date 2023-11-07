import React from 'react';
import { Table } from 'react-bootstrap';

export default function WeatherDay({ day }) {
  return (
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
  );
}
