import React, { useState, useEffect, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import { AddPost } from './pages/AddPost'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
export const AppContext = createContext()


function App() {
  const postsData = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : []
  const searchValue = localStorage.getItem('searchData') ? JSON.parse(localStorage.getItem('searchData')) : []
  const [posts, setPosts] = useState(postsData)
  const [searchData, setSearchData] = useState(searchValue)
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('searchData', JSON.stringify(searchData))
  }, [searchData])

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  return (
    <AppContext.Provider value={{posts, setPosts, search, setSearch, searchData, setSearchData}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addpost' element={<AddPost />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<h1>404: Page not found</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App
