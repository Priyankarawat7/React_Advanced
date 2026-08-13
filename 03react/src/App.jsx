import React from 'react'
import Card from './components/card'

function App() {
  const cardsData = [
  {
    id: 1,
    role: "Pro",
    name: "Neelesh Choudhary",
    profession: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=1",
    description:
      "Creative UI/UX designer focused on creating simple and user-friendly digital experiences."
  },
  {
    id: 2,
    role: "Pro",
    name: "Priya Sharma",
    profession: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=2",
    description:
      "Frontend developer passionate about React, modern interfaces and responsive web design."
  },
  {
    id: 3,
    role: "Expert",
    name: "Rahul Verma",
    profession: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=3",
    description:
      "Full stack developer building scalable web applications using modern technologies."
  },
  {
    id: 4,
    role: "Pro",
    name: "Ananya Singh",
    profession: "Graphic Designer",
    image: "https://i.pravatar.cc/150?img=4",
    description:
      "Graphic designer creating visual identities, illustrations and engaging digital content."
  },
  {
    id: 5,
    role: "Expert",
    name: "Arjun Mehta",
    profession: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=5",
    description:
      "Software engineer interested in building efficient and reliable software solutions."
  },
  {
    id: 6,
    role: "Pro",
    name: "Simran Kaur",
    profession: "Product Designer",
    image: "https://i.pravatar.cc/150?img=6",
    description:
      "Product designer combining user research and visual design to solve real problems."
  },
  {
    id: 7,
    role: "Expert",
    name: "Karan Malhotra",
    profession: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=7",
    description:
      "Backend developer working with APIs, databases and server-side application architecture."
  },
  {
    id: 8,
    role: "Pro",
    name: "Riya Kapoor",
    profession: "Digital Marketer",
    image: "https://i.pravatar.cc/150?img=8",
    description:
      "Digital marketer helping brands grow through creative campaigns and online strategies."
  },
  {
    id: 9,
    role: "Expert",
    name: "Aditya Sharma",
    profession: "Mobile Developer",
    image: "https://i.pravatar.cc/150?img=9",
    description:
      "Mobile developer creating smooth and intuitive applications for modern users."
  },
  {
    id: 10,
    role: "Pro",
    name: "Mehak Gupta",
    profession: "Web Designer",
    image: "https://i.pravatar.cc/150?img=10",
    description:
      "Web designer focused on beautiful, responsive and conversion-friendly websites."
  }
];

  return (
    <>
    <div className="parent">
     {
      cardsData.map(function (e) {

        return <Card key={e.id} role={e.role} name={e.name} profession={e.profession} image={e.image} description={e.description}/>


        })

     } 
        
      

      
    
     
    

    </div>
     
    </>
  )
}

export default App
