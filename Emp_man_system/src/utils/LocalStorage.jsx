
const employees = [
  {
    id: 1,
    name: "Rahul",
    email: "rahul@gmail.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
      total: 4
    },

    tasks: [
      {
        title: "Make a YouTube video",
        description: "Create and upload a YouTube video.",
        date: "20 Feb 2024",
        category: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Complete React project",
        description: "Finish the remaining React dashboard work.",
        date: "22 Feb 2024",
        category: "Medium",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Fix the authentication issue in the application.",
        date: "18 Feb 2024",
        category: "High",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Submit report",
        description: "Submit the project report before the deadline.",
        date: "15 Feb 2024",
        category: "Low",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    name: "Ananya",
    email: "ananya@gmail.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
      total: 5
    },

    tasks: [
      {
        title: "Design landing page",
        description: "Create a responsive landing page design.",
        date: "21 Feb 2024",
        category: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Create navbar",
        description: "Build a responsive navigation bar.",
        date: "23 Feb 2024",
        category: "Medium",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Complete homepage",
        description: "Finish the homepage UI and functionality.",
        date: "17 Feb 2024",
        category: "High",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test website",
        description: "Test the website on different screen sizes.",
        date: "16 Feb 2024",
        category: "Low",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix CSS issues",
        description: "Fix remaining styling issues.",
        date: "14 Feb 2024",
        category: "Medium",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    name: "Arjun",
    email: "arjun@gmail.com",
    password: "123",

    taskCount: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1,
      total: 6
    },

    tasks: [
      {
        title: "Build dashboard",
        description: "Create the employee dashboard UI.",
        date: "24 Feb 2024",
        category: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Add authentication",
        description: "Implement login and logout functionality.",
        date: "25 Feb 2024",
        category: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Create API",
        description: "Create API endpoints for the project.",
        date: "26 Feb 2024",
        category: "Medium",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Database setup",
        description: "Configure the project database.",
        date: "20 Feb 2024",
        category: "High",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API testing",
        description: "Test all API endpoints using Postman.",
        date: "19 Feb 2024",
        category: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix deployment",
        description: "Fix deployment related issues.",
        date: "18 Feb 2024",
        category: "Low",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    name: "Simran",
    email: "simran@gmail.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
      total: 4
    },

    tasks: [
      {
        title: "Create portfolio",
        description: "Build a modern developer portfolio.",
        date: "27 Feb 2024",
        category: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Add projects",
        description: "Add all completed projects to portfolio.",
        date: "28 Feb 2024",
        category: "Medium",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Design contact page",
        description: "Create and complete the contact page.",
        date: "22 Feb 2024",
        category: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy portfolio",
        description: "Deploy the portfolio website.",
        date: "21 Feb 2024",
        category: "High",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 5,
    name: "Karan",
    email: "karan@gmail.com",
    password: "123",

    taskCount: {
      active: 3,
      newTask: 2,
      completed: 3,
      failed: 1,
      total: 7
    },

    tasks: [
      {
        title: "Create login page",
        description: "Build a responsive login page.",
        date: "01 Mar 2024",
        category: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Create signup page",
        description: "Build a responsive registration page.",
        date: "02 Mar 2024",
        category: "High",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Add form validation",
        description: "Add validation to all forms.",
        date: "03 Mar 2024",
        category: "Medium",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix responsive issues",
        description: "Make the website responsive.",
        date: "25 Feb 2024",
        category: "Medium",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test authentication",
        description: "Test login and registration functionality.",
        date: "24 Feb 2024",
        category: "High",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update UI",
        description: "Improve the overall application UI.",
        date: "23 Feb 2024",
        category: "Low",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix production bug",
        description: "Fix the bug found in production.",
        date: "22 Feb 2024",
        category: "High",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];



const admin = [{
  id: 101,
  name: "Admin",
  email: "admin@gmail.com",
  password: "123"
}];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}


export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees')) || []
  const admin = JSON.parse(localStorage.getItem('admin')) || []
  // console.log(employees);
  // console.log(admin);

  return{ employees,admin}
  
  
}