import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useState,useContext } from "react";
import { MoviesContext } from "./MoviesContext";

export const moviesObject = [
  {
    id: 1,
    title: "Inception",
    description: "A skilled thief enters the dreams of others to steal secrets but faces a mission that could change reality itself.",
    duration: "2h 28m",
    releaseDate: "2010-07-16",
    poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    genre: ["Sci-Fi", "Action", "Thriller"],
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    director: "Christopher Nolan",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "Batman faces his greatest psychological and physical test when he confronts the Joker, a criminal mastermind.",
    duration: "2h 32m",
    releaseDate: "2008-07-18",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genre: ["Action", "Crime", "Drama"],
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: "Christopher Nolan",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A group of explorers travel through a wormhole in space in search of a new home for humanity.",
    duration: "2h 49m",
    releaseDate: "2014-11-07",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: "Christopher Nolan",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    id: 4,
    title: "The Matrix",
    description: "A hacker discovers the world is a simulation and joins a rebellion to free humanity from machines.",
    duration: "2h 16m",
    releaseDate: "1999-03-31",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    genre: ["Sci-Fi", "Action"],
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "The Wachowskis",
    trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    id: 5,
    title: "Avatar",
    description: "A paraplegic marine dispatched to Pandora becomes torn between following orders and protecting his new home.",
    duration: "2h 42m",
    releaseDate: "2009-12-18",
    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    genre: ["Sci-Fi", "Adventure", "Fantasy"],
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    director: "James Cameron",
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
  },
  {
    id: 6,
    title: "Titanic",
    description: "A young couple from different social classes fall in love aboard the ill-fated RMS Titanic.",
    duration: "3h 14m",
    releaseDate: "1997-12-19",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    genre: ["Romance", "Drama"],
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    director: "James Cameron",
    trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ"
  },
  {
    id: 7,
    title: "Gladiator",
    description: "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family.",
    duration: "2h 35m",
    releaseDate: "2000-05-05",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    genre: ["Action", "Drama", "Adventure"],
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    director: "Ridley Scott",
    trailer: "https://www.youtube.com/watch?v=owK1qxDselE"
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over years, finding solace and eventual redemption through acts of kindness.",
    duration: "2h 22m",
    releaseDate: "1994-09-23",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    genre: ["Drama"],
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    director: "Frank Darabont",
    trailer: "https://www.youtube.com/watch?v=NmzuHjWmXOc"
  },
  {
    id: 9,
    title: "Forrest Gump",
    description: "The life journey of Forrest Gump, a man with a kind heart but below-average IQ, across decades of American history.",
    duration: "2h 22m",
    releaseDate: "1994-07-06",
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    genre: ["Drama", "Romance"],
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    director: "Robert Zemeckis",
    trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg"
  },
  {
    id: 10,
    title: "The Lion King",
    description: "Simba, a young lion prince, flees after his father's death and must reclaim his rightful place as king.",
    duration: "1h 58m",
    releaseDate: "1994-06-24",
    poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    genre: ["Animation", "Drama", "Adventure"],
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    director: "Roger Allers, Rob Minkoff",
    trailer: "https://www.youtube.com/watch?v=4sj1MT05lAA"
  },
  {
    id: 11,
    title: "Avengers: Endgame",
    description: "The Avengers assemble once more to reverse Thanos’ snap and restore balance to the universe.",
    duration: "3h 2m",
    releaseDate: "2019-04-26",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    director: ["Anthony Russo", "Joe Russo"],
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
  },
  {
    id: 12,
    title: "Jurassic Park",
    description: "Dinosaurs are brought back to life in a theme park, but things quickly spiral out of control.",
    duration: "2h 7m",
    releaseDate: "1993-06-11",
    poster: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
    genre: ["Sci-Fi", "Adventure", "Thriller"],
    cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    director: "Steven Spielberg",
    trailer: "https://www.youtube.com/watch?v=lc0UehYemQA"
  },
  {
    id: 13,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
    duration: "2h 55m",
    releaseDate: "1972-03-24",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    genre: ["Crime", "Drama"],
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    director: "Francis Ford Coppola",
    trailer: "https://www.youtube.com/watch?v=sY1S34973zA"
  },
  {
    id: 14,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "A hobbit and his companions set out on a journey to destroy a powerful ring and defeat the dark lord Sauron.",
    duration: "2h 58m",
    releaseDate: "2001-12-19",
    poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    genre: ["Fantasy", "Adventure"],
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    director: "Peter Jackson",
    trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4"
  },
  {
    id: 15,
    title: "Spider-Man: No Way Home",
    description: "Spider-Man seeks Doctor Strange’s help to restore his secret identity, but things spiral out of control across universes.",
    duration: "2h 28m",
    releaseDate: "2021-12-17",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
    director: "Jon Watts",
    trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA"
  },
];


export default function Home({ searchMovie }) {

  const {movies, setMovies} = useContext(MoviesContext);

  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortType, setSortType] = useState(null);

  const handleOpen = (movie) => {
    setSelectedMovie(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedMovie(null);
    setOpen(false);
  };

  const sortAZ = () => {
    let sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sorted);
    setSortType("AZ");
  };
  const sortZA = () => {
    let sorted = [...movies].sort((a, b) => b.title.localeCompare(a.title));
    setMovies(sorted);
    setSortType("ZA");
  };

  const filteredMovie = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );

  return (
    <>
      {/* Sorting */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
          marginBottom: "30px",
          marginRight:'50px'
        }}
      >
        <Button
          variant={sortType === "AZ" ? "contained" : "outlined"}
          onClick={sortAZ}
        >
          A - Z
        </Button>
        <Button
          variant={sortType === "ZA" ? "contained" : "outlined"}
          onClick={sortZA}
        >
          Z - A
        </Button>
      </Box>

      {/* Movie Cards */}

      <Box
        sx={{ display: "flex", flexWrap: "wrap", gap: "-5px", padding: "20px" }}
      >
        {filteredMovie.map((movie, id) => (
          <Card
            key={id}
            sx={{ width: "20%", marginLeft: "120px", marginBottom: "40px" }}
            onClick={() => handleOpen(movie)}
          >
            <CardMedia component="img" image={movie.poster} alt={movie.title} />

            <CardContent>
              <Typography variant="h5">{movie.title}</Typography>
              <Typography>{movie.duration}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Dialog Box */}

      {
        <Dialog open={open} onClose={handleClose} sx={{width:'30%', marginLeft:'35%'}}>
          {selectedMovie && (
            <>
              <DialogContent>

                <Box sx={{display:'flex',justifyContent:'space-between',}}>


                <DialogTitle
                  sx={{
                    marginLeft: "-25px",
                    fontSize: "1.5rem",
                    paddingTop: "0px",
                  }}
                >
                  {selectedMovie.title}
                </DialogTitle>

                <CloseIcon onClick={handleClose} sx={{marginTop:'6px',color:'red',backgroundColor:'black',fontSize:'20px'}}></CloseIcon>
                </Box>
                <img
                  style={{ width: "100%", height: "350px" }}
                  src={selectedMovie.poster}
                  alt={selectedMovie.title}
                />
                <strong>Description:</strong>{" "}
                <Typography variant="body2">
                  {selectedMovie.description}
                </Typography>
                
                <strong>Duration:</strong>{" "}
                <Typography variant="body2">
                  {selectedMovie.duration}
                </Typography>

                <strong>Release Date:</strong>{" "}
                <Typography variant="body2">
                  {selectedMovie.releaseDate}
                </Typography>

                <strong>Genre:</strong>{" "}
                <Typography variant="body2">
                  {selectedMovie.genre.join(", ")}
                </Typography>

                <strong>Cast:</strong>{" "}
                <Typography variant="body2">
                  {selectedMovie.cast.join(", ")}
                </Typography>

                <strong>Director:</strong>{" "}
                <Typography variant="body2">
                  {selectedMovie.director}
                </Typography>

                {/* <strong>Trailer:</strong>{" "} */}
                <Button variant="contained" href={selectedMovie.trailer}>Click to watch Trailer</Button>


              </DialogContent>
            </>
          )}
        </Dialog>
      }
    </>
  );
}