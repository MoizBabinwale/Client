import React from 'react'
// import './DisplayPost.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import PostDetail from './PostDetail'

const DisplayPost = ({ slideIn }) => {
  return (
    <div className='lg:flex lg:p-3  gap-2 p-2 max-w-[1250px] min-h-fit w-full m-auto'>
      <LeftSidebar slideIn={slideIn} />
      <div className='md:gap-x-3 lg:flex lg:w-[100%]'>
        <PostDetail />
        <RightSidebar />
      </div>
    </div>
  )
}

export default DisplayPost