import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function HomePage() {
    const {query}= useSelector((store)=>store.search)
   // console.log(query);
    
  return (
    <div>
      
        <SearchBar/>
        {query !=''?<div><Tabs/></div>:<h1>Add Something</h1>}
      
      <ResultGrid/>
    </div>
  )
}

export default HomePage
