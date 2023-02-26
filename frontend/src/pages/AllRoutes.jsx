import React from 'react'
import {Routes,Route} from "react-router-dom" 
import AllUsers from './AllUsers'
import Home from './Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<AllUsers/>} />
    </Routes>
  )
}

export default AllRoutes