import React,{useEffect, useMemo, useState} from "react";
import { ThemeProvider, createTheme, CssBaseline, AppBar, Button, Toolbar, Typography, Box, IconButton, TextField } from "@mui/material";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {Home} from "./Home";
import {Edit} from "./Edit";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {MoviesProvider} from "./MoviesContext";
import { DarkMode, LightMode } from "@mui/icons-material";


export function Main() {

    const [searchMovie,setSearchMovie]=useState('')

    const [mode,setMode]=useState(()=>{
      const storedMode=localStorage.getItem("themeMode")
      return storedMode ? storedMode : 'light'
    })

    useEffect(()=>{
      localStorage.setItem("themeMode",mode)
    },[mode]);

    const theme = useMemo(() => {
    console.log("Theme created for:", mode); // debugging
    return createTheme({
      palette: { mode: mode },
    });
  }, [mode]);



  const toggleTheme=()=>{
    setMode((prevMode)=> prevMode==='light' ? 'dark' : 'light')
  }

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
    <BrowserRouter>
      {/* Navbar Here */}
      <AppBar position="sticky" sx={{width:'100%'}}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" fontFamily='cursive'>
            MovieApp
          </Typography>

          {/* <Box sx={{ display: "flex", alignItems: "center",width:'40%',marginLeft:'10rem' }}> */}
            <TextField
             variant="outlined"
             size="small"
              placeholder="Search Movies..."
              sx={{
                bgcolor: "background.paper", // uses theme paper color (white in light mode, dark gray in dark mode)
                borderRadius: 1,
                width: "20rem",
                input: { color: "text.primary" }, // text color adapts to theme
              }}
            
              value={searchMovie}
              onChange={(e)=>setSearchMovie(e.target.value)}
            />
            {/* <Button
              variant="contained"
              sx={{ backgroundColor: "white", color: "black", ml: 1 }}
            >
              Search
            </Button> */}
          {/* </Box> */}

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} to="/" sx={{ color: "white",fontFamily:'cursive' }}>
              Home
            </Button>
            <Button component={Link} to="/edit" sx={{ color: "white",fontFamily:'cursive' }}>
              Edit
            </Button>

            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

    <MoviesProvider>
      <Routes>
        <Route index element={<Home searchMovie={searchMovie} />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </MoviesProvider>
    </BrowserRouter>
    </ThemeProvider>
  );
}


