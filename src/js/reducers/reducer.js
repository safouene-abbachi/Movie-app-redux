import {
  SEARCH_MOVIE,
  SEARCH_RATING,
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  PATH_HANDLER,
  PATH_BACK
} from "../actions/actionTypes";

const initialState = {
  searchWords: "",
  star: 0,
  showmodal: true,
  pathindex: 0,

  MovieList: [
    {
      image: "https://miro.medium.com/max/674/1*wNNxHTqzCeIPYAsl1rbVpg.jpeg",
      title: "Joker",
      year: "2019",
      rating: "5",
      trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    {
      image:
        "http://fr.web.img4.acsta.net/medias/nmedia/18/36/31/71/18479867.jpg",
      title: "vendetta",
      year: "2017",
      rating: "4",
      trailer: "https://www.youtube.com/embed/lSA7mAHolAw"
    },
    {
      image:
        "https://i.pinimg.com/originals/68/95/2b/68952b45cd3bc856af3ab5dac3fa9d5d.jpg",
      title: "troy",
      year: "2010",
      rating: "4",
      trailer: "https://www.youtube.com/embed/OaSkIVpp_mI"
    },
    {
      image: "https://fr.rarbg.bid/images/covermid/7158904_mid.jpg",
      title: "blood",
      year: "2015",
      rating: "3",
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
    },
    {
      image:
        "https://steemitimages.com/640x0/https://tehnot.com/wp-content/uploads/2018/04/image.jpg",
      title: "venom",
      year: "2018",
      rating: "2",
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
    },
    {
      image:
        "https://img.filmsactu.net/datas/seriestv/t/h/the-witcher/n/5da9706b22608.jpg",
      title: "witcher",
      year: "2012",
      rating: "5",
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
    },
    {
      image:
        "https://www.joblo.com/assets/images/oldsite/posters/images/full/2007-golden_compass-9.jpg",
      title: "golden",
      year: "2007",
      rating: "2",
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
    },
    {
      image:
        "https://lh3.googleusercontent.com/UYsbHazf8DmRxoY83RoFgKOU3V1b2NzZjmwjHjQ9LBDuIpmdUyCgKHG0kEvsj4GWuu9O",
      title: "hobbit",
      year: "2018",
      rating: "4",
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, searchWords: action.payload };

    case SEARCH_RATING:
      return { ...state, star: action.payload };

    case ADD_MOVIE:
      // return {...state, MovieList.concat(action.payload)};
      return {
        ...state,
        MovieList: state.MovieList.concat(action.payload)
      };

    case DELETE_MOVIE:
      return {
        ...state,
        MovieList: state.MovieList.filter(el => el.title !== action.payload)
      };

    case EDIT_MOVIE:
      // let editedMovie = state.MovieList;

      // editedMovie[action.payload.id] = action.payload.newMovie;
      return {
        ...state,
        MovieList: state.MovieList.map((el, i) =>
          i === action.payload.id ? { ...el, ...action.payload.newMovie } : el
        )
      };
    case PATH_HANDLER:
      return {
        ...state,
        pathindex: action.index
      };

    case PATH_BACK:
      return {
        ...state,
        pathindex: 0
      };
    default:
      return state;
  }
};

export default reducer;
