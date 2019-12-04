import React, { Component } from "react";
import SearchFilter from "./Components/SearchFilter";
import SearchRating from "./Components/SearchRating";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import { connect } from "react-redux";
import { searchRating } from "../src/js/actions/actionCreator";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trailer from "./Components/trailer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="first">
            <SearchFilter />
            <AddMovie />
          </div>
          <SearchRating
            className="filterstar"
            rate={this.props.stars}
            onClick={this.props.searchRating}
          />
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route
              path={`/:${this.props.movies[this.props.pathindex].title}`}
              render={() => (
                <Trailer
                  trailer={this.props.movies[this.props.pathindex].trailer}
                />

                // <p>{this.props.movies[this.props.pathindex].trailer}</p>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    stars: state.star,
    movies: state.MovieList,
    pathindex: state.pathindex
  };
};
const mapDispatchToProps = dispatch => ({
  searchRating: rating => {
    dispatch(searchRating(rating));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
