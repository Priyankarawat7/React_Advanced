import React, { useEffect } from 'react'

import { fetchPhotos,fetchVideos,fetchGif } from "../api/mediaApi";
import {setQuery,setError,setLoading,setResults} from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux';
import { data } from 'react-router-dom';


function ResultGrid() {

   const {query,activeTab, results, loading,error}= useSelector((store)=>store.search)
    
    useEffect(()=>{

    const getData=async ()=>{
        if(!query.trim()) return
    if(activeTab==='photos'){
        let response=await fetchPhotos(query)
        const data=response.results
         console.log(data);
          }
    if(activeTab==='videos'){
        let response=await fetchVideos(query)
        const data =response.videos
         console.log(data);
     }
     if(activeTab==='gif'){
        let data=await fetchGif(query)
       
         console.log(data);
     }
     

   }
  
    getData()
        
     },[query,activeTab])
   
   //useDispatch()
  return (
    <div>

        {/* <button>Get data</button> */}
      
    </div>
  )
}

export default ResultGrid
