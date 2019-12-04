import React, { Component } from "react";
import {
  editMovie,
  saveEdit,
  deleteMovie,
  pathHandler,
  pathBack,
  addMovie
} from "../js/actions/actionCreator";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      modal: false
    };
  }

  //   addMovies = () => {
  //     this.props.addMovie(this.state.movie);
  //   };
  changeHandler = e => {
    this.setState({
      movie: {
        ...this.state.movie,
        [e.target.name]: e.target.value
      }
    });
  };
  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div>
        <Button
          outline
          color="primary"
          className="editbtnadd"
          onClick={this.toggle}
        >
          Add New Movie
        </Button>{" "}
        <Modal isOpen={this.state.modal}>
          <ModalHeader>New Movie</ModalHeader>
          <ModalBody>
            <Label for="Movie Name">Adding Movie</Label>
            <Input
              placeholder="enter url image"
              type="text"
              name="image"
              defaultValue={
                this.props.id && this.props.movie[this.props.id].image
              }
              onChange={this.changeHandler}
            />
            <Input
              placeholder="enter movie title"
              type="text"
              name="title"
              id="movie"
              defaultValue={
                this.props.id && this.props.movie[this.props.id].title
              }
              onChange={this.changeHandler}
            />
            <Input
              placeholder="enter movie year"
              type="text"
              name="year"
              id="movie"
              defaultValue={
                this.props.id && this.props.movie[this.props.id].year
              }
              onChange={this.changeHandler}
            />
            <Input
              placeholder="enter rating"
              type="text"
              name="rating"
              id="movie"
              defaultValue={
                this.props.id && this.props.movie[this.props.id].rating
              }
              onChange={this.changeHandler}
            />
          </ModalBody>
          <ModalFooter className="buttons">
            <Button
              className="submit-btn"
              color="success"
              onClick={() => {
                this.props.editMovie({
                  id: this.props.id,
                  newMovie: this.state.movie
                });
                this.toggle();
                this.props.addMovie(this.state.movie);
              }}

              // onClick={() => this.props.toggle()}
            >
              Submit
            </Button>{" "}
            <Button
              className="cancel-btn"
              color="danger"
              onClick={() => {
                this.toggle();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ movie: state.MovieList });

const mapDispatchToProps = dispatch => {
  return {
    editMovie: payload => {
      dispatch(editMovie(payload));
    },

    saveEdit: movieupdated => dispatch(saveEdit(movieupdated)),
    editMovie: payload => {
      dispatch(editMovie(payload));
    },
    pathHandler: index => {
      dispatch(pathHandler(index));
    },
    pathBack: () => {
      dispatch(pathBack());
    },
    deleteMovie: payload => {
      dispatch(deleteMovie(payload));
    },
    addMovie: payload => {
      dispatch(addMovie(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
