import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import Post from './Pages/Post/Post'
import DisplayPost from './Pages/Post/DisplayPost'
import UserProfile from './Pages/UserProfile/UserProfile'

const AllRoutes = ({ slideIn }) => {
  return (
    <Routes>
      <Route path='/' element={<Home slideIn={slideIn} />} />
      <Route path='/Auth' element={<Auth slideIn={slideIn} />} />
      <Route path='/AskQuestion' element={<AskQuestion slideIn={slideIn} />} />
      <Route path='/Questions' element={<Questions slideIn={slideIn} />} />
      <Route path='/Questions/:id' element={<DisplayQuestion slideIn={slideIn} />} />
      <Route path='/Tags' element={<Tags slideIn={slideIn} />} />
      <Route path='/Users' element={<Users slideIn={slideIn} />} />
      <Route path='/Users/:id' element={<UserProfile slideIn={slideIn} />} />
      <Route path='/DisplayPost' element={<DisplayPost slideIn={slideIn} />} />
      <Route path='/Post' element={<Post slideIn={slideIn} />} />
    </Routes>
  )
}

export default AllRoutes
