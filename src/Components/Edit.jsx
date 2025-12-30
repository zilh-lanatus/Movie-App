import React,{useContext} from 'react'
//import { moviesObject } from './Home'
import {Box} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { MoviesContext } from './MoviesContext';


const columns = [

  { field: 'id',
    headerName: 'ID',
    width: 70
  },
  {
    field: 'title',
    headerName: 'title',
    width: 140,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'description',
    width: 350,
    editable: true,
  },
  {
    field: 'duration',
    headerName: 'duration',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'releaseDate',
    headerName: 'releaseDate',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    editable: true
  },
  {
    field: 'genre',
    headerName: 'genre',
    width: 150,
    editable: true,
  },
  {
    field: 'cast',
    headerName: 'cast',
    width: 250,
    editable: true,
  },
  {
    field: 'director',
    headerName: 'director',
    width: 150,
    editable: true,
  },
];




export function Edit() {

  const {movies,setMovies}=useContext(MoviesContext)


  const handleRowEdit =(updateRow)=>{
    const updatedMovies=movies.map((movie)=>(
      movie.id===updateRow.id ? {...movie,...updateRow} : movie
    ))
    setMovies(updatedMovies)
    return updateRow;
  }
  
  return (
    <>
    <Box sx={{ height: 400, width: '100%', marginTop:'60px' }}>
      <DataGrid
        rows={movies}
        columns={columns}
        getRowId={(row)=>row.id}
        processRowUpdate={handleRowEdit}
        experimentalFeatures={{ newEditingApi: true }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
         checkboxSelection
        //  disableRowSelectionOnClick
      />
    </Box>
    </>
  )
}