import React from 'react'
import BlogPagination from '../components/Blog/BlogPagination'

function Blog() {
  return (

    <div className="bg-green-700 py-32">
    <h1 className="text-white text-6xl text-center">Blogs</h1>
    <BlogPagination />
  </div>
  )
}

export default Blog