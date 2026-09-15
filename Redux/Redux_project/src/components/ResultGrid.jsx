import React, { useEffect } from 'react'

import { fetchPhotos,fetchVideos,fetchGif } from "../api/mediaApi";
import {setQuery,setError,setLoading,setResults} from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux';
import { data } from 'react-router-dom';
import ResultCard from './ResultCard';


function ResultGrid() {

    const dispatch=useDispatch()

   const {query,activeTab, results, loading,error}= useSelector((store)=>store.search)
    
    useEffect(()=>{

    const getData=async ()=>{
         if(!query.trim()) return 

        try {
            dispatch(setLoading())
             let data=[]
       
    if(activeTab==='photos'){
        let response=await fetchPhotos(query)
        data=response.results.map((item)=>({

            id:item.id,
            type:'photo',
            title:item.alt_description,
            thumbnail:item.urls.small,
            src:item.urls.small,
            url:item.links.html

        }))
          console.log(data);

    }    
    if(activeTab==='videos'){
        let response=await fetchVideos(query)
         data =response.videos.map((item)=>({
           id:item.id,
            type:'video',
            title:item.user.name || 'video',
            thumbnail:item.image,
            src:item.video_files[0].link,
            url:item.url


        }))
         console.log(data);
     }
     if(activeTab==='gif'){
        let response=await fetchGif(query)
         console.log(response.data);
         data=response.data.map((item)=>({
            id:item.id,
            type:'gif',
            title:item.title,
            src:item.images.fixed_width_small.url,
            thumbnail:item.url,
            url:item.url
           

        }))
       
       
     }

     dispatch(setResults(data))
            
        } catch (error) {

            dispatch(setError(error.message))
            
        }

       
   }
    getData()
        
     },[query,activeTab,dispatch])

     if(error) return <h1>Error</h1>
     if(loading) return <h1>Loading...</h1>
   
   //useDispatch()
  return (
    <div className='flex h-[500px] flex-wrap gap-10 mt-10 justify-center  '>
        {results.map((item,idx)=>{
            return  <div key={idx}>
                <ResultCard item={item}/>
               
            </div>
            

        })
        
        }

        {/* <button>Get data</button> */}
      
    </div>
  )
}

export default ResultGrid
