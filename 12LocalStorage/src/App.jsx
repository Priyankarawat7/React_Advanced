import React, { use } from 'react'

function App() {
  //localStorage.clear() //to clear the storage
  //sessionStorage.clear()

  // localStorage.setItem('user','Priyanka') //to set some value
  //  localStorage.setItem('age','18')

//   const user= localStorage.getItem('user') //to use the value
//  const age=localStorage.getItem('age')
//   console.log(user); //priyanka
//   console.log(age);

//   localStorage.removeItem('user')

  //to retrive array

  // const user={
  //   username:'priyanka',
  //   age:21,
  //   city:'chandigarh'
  // }

  //console.log(user);

 //localStorage.setItem('user',JSON.stringify(user)) //to convert the data  into string 
  
  const user=JSON.parse(localStorage.getItem('user')) //to convert the data into object

  console.log(user);
  
  
  
 
 return (
    <div>
      hello
    </div>
  )
}

export default App
