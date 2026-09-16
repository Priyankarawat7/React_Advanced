import {createSlice} from '@reduxjs/toolkit'

  import {Slide, toast } from 'react-toastify';
const initialState={
    items:JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice=createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection:(state,action)=>{
            const alreadyExits=state.items.find(
                item=>item.id==action.payload.id
            )
            if(!alreadyExits){
            state.items.push(action.payload)
            localStorage.setItem('collection',JSON.stringify(state.items))
            console.log('hogya add');
                
            }
          
        },

        removeCollection:(state,action)=>{
            state.items=state.items.filter(
            item=>item.id!=action.payload.id

            )
            localStorage.setItem('collection',JSON.stringify(state.items))

        },
        clearCollection:(state,action)=>{
            state.items=[]
            localStorage.removeItem('collection')

        },
        addToast:()=>{
        toast.success('Added to collection', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Slide,
            });

        }
        
    }
})

export const {addCollection,removeCollection,clearCollection,addToast}=collectionSlice.actions

export default collectionSlice.reducer