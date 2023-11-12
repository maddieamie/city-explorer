import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import FoodCard from "./FCard";

export default class FoodList extends Component {
  render() {
    const { Food } = this.props;
  

    return (
        <>
      <Row>
        {Food.length > 0 &&
          Food.map((food) => (
            <Col key={food.id} xs={12} sm={6} md={4}>
              <FoodCard food={food} />
            </Col>
          ))}
      </Row>
      </>
    );
  }
}