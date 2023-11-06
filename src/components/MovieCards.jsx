
import { Component } from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";

export default class MovieCards extends Component {
  render() {
    const mm = this.props;
      /*  constructor(obj) {
      this.id = obj.id;
      this.language = obj.original_language;
      this.overview = obj.overview;
      this.poster = obj.poster_path;
      this.release_date = obj.release_date;
      this.title = obj.title;
      this.rating = obj.vote_average;
      this.votercount = obj.vote_count; */

    return (
        <>
      <Row>
        {mm.Movies.length > 0 &&
          mm.Movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4}>
              <Card style={{ variant: "light", border: "info" }}>
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
                </ListGroup>
              </Card>
            </Col>
          ))}
      </Row>
      </>
    );
  }
}
