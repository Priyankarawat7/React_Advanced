const employees = [
  {
    id: 1,
    email: "rahul@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page with email and password fields.",
        taskDate: "2026-09-01",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Navbar",
        taskDescription: "Develop a responsive navigation bar for the website.",
        taskDate: "2026-09-02",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Build the landing page according to the provided design.",
        taskDate: "2026-08-27",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Mobile Layout",
        taskDescription: "Fix responsive issues appearing on mobile devices.",
        taskDate: "2026-08-25",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 2,
    email: "ananya@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Design a clean and modern admin dashboard interface.",
        taskDate: "2026-09-01",
        category: "UI/UX"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Profile Page",
        taskDescription: "Create a user profile page with editable information.",
        taskDate: "2026-09-03",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription: "Prepare wireframes for the new website.",
        taskDate: "2026-08-26",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Choose Color Palette",
        taskDescription: "Select suitable colors for the application interface.",
        taskDate: "2026-08-24",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Create Mobile Prototype",
        taskDescription: "Build a mobile prototype for the application.",
        taskDate: "2026-08-22",
        category: "Prototype"
      }
    ]
  },

  {
    id: 3,
    email: "arjun@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create REST API",
        taskDescription: "Develop REST APIs for user authentication and management.",
        taskDate: "2026-09-01",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Connect Database",
        taskDescription: "Connect the application with the MySQL database.",
        taskDate: "2026-09-02",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Express Server",
        taskDescription: "Configure Express server and required middleware.",
        taskDate: "2026-08-25",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create User Model",
        taskDescription: "Create the database model for application users.",
        taskDate: "2026-08-26",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix API Authentication",
        taskDescription: "Resolve authentication errors in protected API routes.",
        taskDate: "2026-08-28",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement JWT Auth",
        taskDescription: "Implement JWT based authentication for the application.",
        taskDate: "2026-09-04",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    email: "simran@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Analyze Sales Data",
        taskDescription: "Analyze monthly sales data and identify important trends.",
        taskDate: "2026-09-01",
        category: "Data Analytics"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Sales Report",
        taskDescription: "Prepare a detailed report based on the sales dataset.",
        taskDate: "2026-09-03",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Clean Dataset",
        taskDescription: "Remove duplicate and missing values from the dataset.",
        taskDate: "2026-08-25",
        category: "Data Cleaning"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Charts",
        taskDescription: "Create visual charts to represent important metrics.",
        taskDate: "2026-08-27",
        category: "Visualization"
      }
    ]
  },

  {
    id: 5,
    email: "karan@gmail.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Login System",
        taskDescription: "Test login and logout functionality with different users.",
        taskDate: "2026-09-01",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Registration Form",
        taskDescription: "Check registration form validation and error handling.",
        taskDate: "2026-09-02",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Navbar",
        taskDescription: "Verify all navigation links and responsive behavior.",
        taskDate: "2026-08-24",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Dashboard",
        taskDescription: "Test dashboard components and task statistics.",
        taskDate: "2026-08-26",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Test Mobile View",
        taskDescription: "Test the application on different mobile screen sizes.",
        taskDate: "2026-08-28",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Task Creation",
        taskDescription: "Verify that admins can create and assign new tasks.",
        taskDate: "2026-09-05",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Error Messages",
        taskDescription: "Verify that proper error messages are displayed to users.",
        taskDate: "2026-08-29",
        category: "Testing"
      }
    ]
  }
];

const admin = [{
  id: 101,
  email: "admin@gmail.com",
  password: "123"
}];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}


export const getLocalStorage=()=>{
  const employees= JSON.parse(localStorage.getItem('employees' ))
   const admin= JSON.parse(localStorage.getItem('admin' ))
  // console.log(employees);
  // console.log(admin);

  return{ employees,admin}
  
  
}