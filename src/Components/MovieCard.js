import React, { Component, Fragment } from "react";
import Modal1 from "./Modal";
import { Link } from "react-router-dom";
import SearchRating from "./SearchRating";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import {
  deleteMovie,
  editMovie,
  pathHandler,
  pathBack
} from "../js/actions/actionCreator";

class MovieCard extends Component {
  render() {
    const { image, title, year, rating } = this.props.movie;
    return (
      <Fragment>
        <Card className="card-container">
          <div className="saf">{/* <Rate number={this.rate} /> */}</div>

          <CardImg top src={image} alt="Card image cap" />
          <CardBody>
            <div className="film-info">
              <CardTitle className="card-title">{title}</CardTitle>
              <CardSubtitle className="card-year">{year}</CardSubtitle>
              <SearchRating rate={rating} />
            </div>
            <Button
              className="discover"
              outline
              color="secondary"
              onClick={() => this.props.pathHandler(this.props.id)}
            >
              <Link to={{ pathname: "/" + title.replace(/ /g, "_") }}>
                WATCH TRAILER
              </Link>
            </Button>{" "}
            <div className="btns">
              <Modal1 id={this.props.id} />
              <Button
                outline
                color="danger"
                className="remove"
                onClick={() => this.props.deleteMovie(title)}
              >
                DELETE
              </Button>
            </div>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  deleteMovie: payload => {
    dispatch(deleteMovie(payload));
  },
  editMovie: payload => {
    dispatch(editMovie(payload));
  },
  pathHandler: index => {
    dispatch(pathHandler(index));
  },
  pathBack: () => {
    dispatch(pathBack());
  }
});
export default connect(null, mapDispatchToProps)(MovieCard);
