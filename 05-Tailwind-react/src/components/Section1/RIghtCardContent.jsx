import React from 'react'

function RIghtCardContent(props) {
  return (
    <div>
          <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>

         <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center font-bold'>{props.id+1}</h2>
         <div >
            <p className='text-lg text-white leading-relexed mb-5'>Eligendi obcaecati culpa repudiandae quae! Facere rem dolorum deleniti voluptatem, itaque doloremque maiores quisquam adipisci.</p>

            <div className='flex justify-between'>
                <button className='bg-blue-700 px-8 py-2 rounded-full text-white '>{props.tag}</button>
                <button className='bg-blue-700 px-4 py-2 rounded-full text-white '><i className="ri-arrow-right-line"></i></button>
            </div>
         </div>
    </div>
      
    </div>
  )
}

export default RIghtCardContent
