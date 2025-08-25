import React, { createContext, useState } from 'react'
import { moviesObject } from './Home'

export const MoviesContext=createContext()

export default function MoviesProvider({children}) {

    const [movies,setMovies]=useState(moviesObject)

  return (
    <>
    <MoviesContext.Provider value={{movies,setMovies}}>
        {children}
    </MoviesContext.Provider>
    </>
  )
}