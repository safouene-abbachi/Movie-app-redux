import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MovieCard from "../Components/MovieCard";
import { connect } from "react-redux";

class MovieList extends Component {
  render() {
    return (
      <Row>
        {this.props.movies
          .filter(
            el =>
              el.title
                .toLowerCase()
                .includes(this.props.searchWords.toLowerCase().trim()) &&
              el.rating >= this.props.rate
          )
          .map((element, key) => (
            <Col key={key} sm={3}>
              <MovieCard movie={element} id={key} />
            </Col>
          ))}
      </Row>

      // <Row>
      //   <AddMovie
      //     modal={this.state.modal}
      //     toggle={this.toggle}
      //     addItem={this.addMovie}
      //   />
      // </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.MovieList,
    searchWords: state.searchWords,
    rate: state.star
  };
};
export default connect(mapStateToProps, null)(MovieList);
