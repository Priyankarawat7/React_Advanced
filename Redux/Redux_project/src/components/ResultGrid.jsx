import React, { useEffect } from 'react'

import { fetchPhotos,fetchVideos,fetchGif } from "../api/mediaApi";
import {setQuery,setError,setLoading,setResults} from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux';
import { data } from 'react-router-dom';


function ResultGrid() {

    const dispatch=useDispatch()

   const {query,activeTab, results, loading,error}= useSelector((store)=>store.search)
    
    useEffect(()=>{

    const getData=async ()=>{

        let data=[]
        if(!query.trim()) return
    if(activeTab==='photos'){
        let response=await fetchPhotos(query)
        const data=response.results.map((item)=>({

            id:item.id,
            type:'photo',
            title:item.alt_description,
            thumbnail:item.urls.small,
            src:item.urls.full

        }))
          console.log(data);

    }    
    if(activeTab==='videos'){
        let response=await fetchVideos(query)
        const data =response.videos.map((item)=>({
           id:item.id,
            type:'video',
            title:item.user.name || 'video',
            thumbnail:item.image,
            src:item.video_files[0].link


        }))
         console.log(data);
     }
     if(activeTab==='gif'){
        let response=await fetchGif(query)
         let  data=response.data.map((item)=>({
            id:item.id,
            type:'gif',
            title:item.title,
            thumbnail:item.images.fixed_width_small.url,
            src:item.url

        }))
       
        console.log(data);
     }

     dispatch(setResults(data))
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
