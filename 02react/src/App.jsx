import React from 'react'

import Card from './components/Card';
import User from './components/User';

function App() {

 const jobs = [
  {
    id: 1,
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part-time",
    tag2: "Senior level",
    pay: "$120/hr",
    location: "Seattle, USA"
  },
  {
    id: 2,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$110/hr",
    location: "Redmond, USA"
  },
  {
    id: 4,
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEUPUSGm6MtkWIp2orCYHJpVLnjI-skStBKl4j7fImA&s=10",
    company: "Adobe",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: "$105/hr",
    location: "San Jose, USA"
  },
  {
    id: 5,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    company: "Spotify",
    datePosted: "10 days ago",
    post: "UX Researcher",
    tag1: "Part-time",
    tag2: "Mid level",
    pay: "$85/hr",
    location: "New York, USA"
  },
  {
    id: 6,
    brandlogo: "https://img.logo.dev/flipkart.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=512&retina=true&format=png",
    company: "Flipkart",
    datePosted: "2 weeks ago",
    post: "UI Designer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    id: 7,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    company: "Airbnb",
    datePosted: "3 weeks ago",
    post: "Product Designer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$115/hr",
    location: "San Francisco, USA"
  },
  {
    id: 8,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
    company: "Uber",
    datePosted: "4 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: "$100/hr",
    location: "Mumbai, India"
  },
  {
    id: 9,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    company: "Netflix",
    datePosted: "8 weeks ago",
    post: "Senior Product Designer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$130/hr",
    location: "Los Angeles, USA"
  },
  {
    id: 10,
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    company: "Tesla",
    datePosted: "10 weeks ago",
    post: "UI Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$90/hr",
    location: "Austin, USA"
  }
];
console.log(jobs);

 
  return (
    <>
      <div className='parent'>

        {jobs.map(function(e){

         return <Card  key={e.id} brandlogo={e.brandlogo} company={e.company}  
         datePosted={e.datePosted} post={e.post} tag1= {e.tag1} 
         tag2={e.tag2}  pay={e.pay}
         location= {e.location} />
          

        })}

        {/* <User name='priyanka' age={arr[1]}/>
         <User name='Nia'/> */}
       {/* <Card/>
       <Card/>
       <Card/>
       <Card/> */}
       

        
    </div>

   

    </>
  
  )
}

export default App
