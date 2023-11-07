
import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MCard";

export default class MovieCards extends Component {
  render() {
    const {Movies} = this.props;
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
        {Movies.length > 0 &&
          Movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4}>
              <MovieCard movie={movie} />
            </Col>
          ))}
      </Row>
      </>
    );
  }
}
