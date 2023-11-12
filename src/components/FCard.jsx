import { variationPlacements } from '@popperjs/core';
import React from 'react';
import { Card, ListGroup} from 'react-bootstrap';

    

export default function FoodCard({ food }) {
    return (
            <Card style={{ width: '19rem'}} className="card border-info mb-3" id="cards">
                <Card.Header><strong>{food.name}</strong></Card.Header>
                <Card.Img variant="top" src={food.img} style={{ maxwidth: "19rem", height: "12rem"}}/>
                <Card.Body>
                  <Card.Title> <Card.Link href={food.yelp}><strong>{food.name} </strong></Card.Link> On Yelp</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{food.price}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Rating: {food.rating}</Card.Subtitle>
                  <Card.Text>Location: {food.address}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Categories: <mark> || {food.categories} ||</mark></ListGroup.Item>
                  <ListGroup.Item>Phone: {food.phone}</ListGroup.Item>
                  <ListGroup.Item>Number of Rating Votes: {food.reviewcount}</ListGroup.Item>
                 
                </ListGroup>
              </Card>
    )
}