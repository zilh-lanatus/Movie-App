import React, { createContext, useEffect, useState } from 'react'
import { moviesObject } from './Home'

export const MoviesContext=createContext()

export default function MoviesProvider({children}) {

    const [movies,setMovies]=useState(()=>{
      const storedMovies=localStorage.getItem("movies")
      return storedMovies ? JSON.parse(storedMovies) : moviesObject
    })

    useEffect(()=>{
      localStorage.setItem("movies",JSON.stringify(movies))
    },[movies])

  return (
    <>
    <MoviesContext.Provider value={{movies,setMovies}}>
        {children}
    </MoviesContext.Provider>
    </>
  )
}