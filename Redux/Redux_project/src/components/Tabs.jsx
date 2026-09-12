import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

function Tabs() {
    const tabs=['photos','videos','gif']
    const activeTab=useSelector((state)=>state.search.activeTab)
    const dispatch=useDispatch()
  return (
    <div className='flex gap-10 justify-center pt-10'>
        {tabs.map((e,idx)=>{

        return (
             <button 
        onClick={()=>{
            dispatch(setActiveTabs(e))
        }}
         className={`${(activeTab==e
            ?'bg-emerald-800 text-white'
            :'bg-white text-gray-800')} py-2 px-5 
         rounded-3xl font-medium uppercase cursor-pointer 
         active:scale-95`} 
         key={idx}>
        {e}

        </button>

        )
        

        })}
       

      
    </div>
  )
}

export default Tabs
