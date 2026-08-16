import React from 'react'


function App() {

  // const btnClick=()=>{
  //   console.log('button is clicked');
    
  // }

  // const mouseEnter=()=>{
  //   console.log("Mouse Enterend");
    
  // }

  // function InputChange(val){
  //   console.log(val);
    
    // console.log("User is Typing...");
    
 // }


 const pageScrolling=(val)=>{
  // console.log("Page Scrolling...");
  // console.log(val);

  if(val>0)
  {
    console.log("Seedha scrolling");
    

  }
  else{
    console.log("ulta scrolling");
    
  }
  
  
 }
  return (
    <div>
      hello priyanka

      {/* <button  onClick={btnClick}>Click User</button>
      <button onMouseEnter={mouseEnter} >Explore This</button>

      <button onClick={function(){ console.log("hello guys");
      }}>Submit</button>


      {/* 1st option */}
      {/* <input onChange={function(e){ console.log(e.target.value);
      }} type="text"  placeholder='Enter Name'/>

      {/* 2nd option */}
       {/* <input onChange={function(e){ InputChange(e.target.value);
      }} type="text"  placeholder='Enter Name'/>  */}

{/* 
      <div onMouseMove={(e)=>{
        console.log(e.clientY);
        
      }} className="box">

      </div> */}

      <div onWheel={(e)=>{
      //  console.log(e.deltaY);
       pageScrolling(e.deltaY)
       
      }}>
         <div className="page1"></div>
       <div className="page2"></div>
        <div className="page3"></div>

      </div>
     

    </div>
  )
}

export default App
