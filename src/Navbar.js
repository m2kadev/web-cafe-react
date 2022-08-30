import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Search from './assets/search.png'
import Menu from './assets/menu.png'
import { AppContext } from './App'
const Navbar = () => {
  const { search, setSearch, posts, setSearchData } = useContext(AppContext)

  const handleSearch = () => {
    setSearchData(posts.filter(post => {
      return post.category === search
    }))
  }

  const handleNavbar = () => {
    const searchBox = document.getElementById('searchBox')
    const navLins = document.getElementById('navLinks')

    searchBox.classList.toggle('show-search-box')
    navLins.classList.toggle('show-nav-links')

  }

  return (
    <div className='navbar'>
        <div className="logo">WebCafe</div>
        <div className='search-box' id='searchBox'>
            <a href="/search" onClick={handleSearch}><img src={Search} /></a>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search by category" />
        </div>
        <div className="nav-links" id='navLinks'>
            <Link className='links active' to='/'>Home</Link>
            <Link className='links' to='/addpost'>Add Post</Link>
        </div>
        <div className="menu">
          <img onClick={handleNavbar} src={Menu} />
        </div>
    </div>
  )
}

export default Navbar