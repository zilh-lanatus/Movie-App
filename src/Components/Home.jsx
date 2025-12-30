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
  Grid,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useState,useContext } from "react";
import { MoviesContext } from "./MoviesContext";

// enum or Frozen object
const SortType = Object.freeze({
  AZ: "AZ",
  ZA: "ZA",
});


export function Home({ searchMovie }) {

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
    setSortType(SortType.AZ);
  };
  const sortZA = () => {
    let sorted = [...movies].sort((a, b) => b.title.localeCompare(a.title));
    setMovies(sorted);
    setSortType(SortType.ZA);
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
          variant={sortType === SortType.AZ ? "contained" : "outlined"}
          onClick={sortAZ}
        >
          A - Z
        </Button>
        <Button
          variant={sortType === SortType.ZA ? "contained" : "outlined"}
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
                <Button variant="contained" target="_blank" rel="noopener noreferrer" href={selectedMovie.trailer}>Click to watch Trailer</Button>


              </DialogContent>
            </>
          )}
        </Dialog>
      }
    </>
  );
}