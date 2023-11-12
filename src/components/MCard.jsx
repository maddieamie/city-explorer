import React from 'react';
import { Card, ListGroup} from 'react-bootstrap';

export default function MovieCard({ movie }) {
    return (
            <Card className="card border-warning mb-3"  id="moviecard">
                <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w400/${movie.poster}`} />
                <Card.Body>
                  <Card.Title>Title: {movie.title}</Card.Title>
                  <Card.Text>Overview: {movie.overview}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Release Date: {movie.release_date}</ListGroup.Item>
                  <ListGroup.Item>Average Rating: {movie.rating}</ListGroup.Item>
                  <ListGroup.Item>Number of Rating Votes: {movie.votercount}</ListGroup.Item>
                  <ListGroup.Item>Original Language: {movie.language}</ListGroup.Item>
                  <ListGroup.Item><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="The MovieDB Logo" /></ListGroup.Item>
                </ListGroup>
              </Card>
    )
}