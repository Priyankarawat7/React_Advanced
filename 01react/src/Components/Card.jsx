import React from 'react'

function Card( props) {

  console.log(props);
  

  return (
    <>

   

        <div className='card'>
        <img src="https://images.pexels.com/photos/34902491/pexels-photo-34902491.jpeg" alt="" />
      <h1>Myself {props.user}</h1>
      <h1>i am {props.age} years old</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, totam.</p>

      <button>View Profile</button>

    </div>
     {/* <div className='card'>
        <img src="https://images.pexels.com/photos/34902491/pexels-photo-34902491.jpeg" alt="" />
      <h1>I am priyanka</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, totam.</p>

      <button>View Profile</button>
    </div>

     <div className='card'>
        <img src="https://images.pexels.com/photos/34902491/pexels-photo-34902491.jpeg" alt="" />
      <h1>I am priyanka</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, totam.</p>

      <button>View Profile</button>
    </div>

     <div className='card'>
        <img src="https://images.pexels.com/photos/34902491/pexels-photo-34902491.jpeg" alt="" />
      <h1>I am priyanka</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, totam.</p>

      <button>View Profile</button>
    </div> */}

   

    
    </>
  
  )
}

export default Card
