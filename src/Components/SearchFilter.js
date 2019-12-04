import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";
import { searchMovie } from "../js/actions/actionCreator";
import MovieList from "./MovieList";

class SearchFilter extends Component {
  render() {
    return (
      <div className="input-container">
        <input
          placeholder="Searching for a movie...."
          className="search"
          onChange={e => this.props.searchMovie(e.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchMovie: title => {
    dispatch(searchMovie(title));
  }
});

export default connect(null, mapDispatchToProps)(SearchFilter);
