// Mock data for The Modern Scholar app

const mockData = {
  user: {
    name: "Akhil",
    avatar: "👨‍🎓"
  },

  events: [
    {
      id: 1,
      title: "Guest Lecture: AI in Ethics",
      date: "14 OCT",
      time: "2:00 PM",
      location: "Auditorium A",
      description: "Join us for an enlightening discussion on the ethical implications of artificial intelligence in modern society."
    },
    {
      id: 2,
      title: "Campus Networking Event",
      date: "16 OCT",
      time: "5:30 PM",
      location: "Student Center",
      description: "Connect with peers, faculty, and industry professionals."
    },
    {
      id: 3,
      title: "Robotics Club Meeting",
      date: "18 OCT",
      time: "7:00 PM",
      location: "Engineering Lab",
      description: "Design and build with us. Beginners welcome!"
    }
  ],

  notices: [
    {
      id: 1,
      title: "North Campus Water Main Break",
      type: "alert",
      urgency: "URGENT",
      timestamp: "Just now",
      content: "Water service to buildings 14-22 is temporarily suspended. Crews are on site. Expected resolution by 4:00 PM.",
      category: "Infrastructure"
    },
    {
      id: 2,
      title: "Extended Hours Start Tomorrow",
      type: "info",
      timestamp: "2 hrs ago",
      content: "The main library will remain open until 2:00 AM beginning Monday to support midterm preparation.",
      category: "Library"
    },
    {
      id: 3,
      title: "New Menu Items at Commons",
      type: "info",
      timestamp: "5 hrs ago",
      content: "Check out the new plant-based options available at the grill station starting this week.",
      category: "Dining"
    },
    {
      id: 4,
      title: "Midterm Schedule Released",
      type: "info",
      timestamp: "1 day ago",
      content: "Your personalized midterm exam schedule is now available in the Academics portal.",
      category: "Academic"
    }
  ],

  campusPulse: [
    {
      id: 1,
      name: "North Dining Hall",
      status: "Busy",
      type: "dining",
      icon: "🍽️",
      description: "Peak hours. Expect 20+ minute wait."
    },
    {
      id: 2,
      name: "Rec Center",
      status: "Quiet",
      type: "gym",
      icon: "🏋️",
      description: "Great time to visit. Minimal crowds."
    },
    {
      id: 3,
      name: "East Hall Laundry",
      status: "Available",
      type: "laundry",
      icon: "🧺",
      detail: "4 Washers Free",
      description: "Update refreshes every 5 minutes."
    },
    {
      id: 4,
      name: "West Hall Laundry",
      status: "Busy",
      type: "laundry",
      icon: "🧺",
      detail: "1 Dryer Free",
      description: "Most machines in use."
    }
  ],

  locations: [
    {
      id: 1,
      name: "Central Library",
      category: "Libraries",
      icon: "📚",
      hours: "Open until 11:00 PM",
      description: "The heart of IIT Bombay research and study zones.",
      floor: "All levels",
      coords: { x: 40, y: 60 }
    },
    {
      id: 2,
      name: "Lecture Hall Complex",
      category: "Academic",
      icon: "🎓",
      hours: "Open 8:00 AM - 9:00 PM",
      description: "One of IIT Bombay's busiest teaching hubs for lectures and seminars.",
      floor: "Ground to 3rd floor",
      coords: { x: 60, y: 45 }
    },
    {
      id: 3,
      name: "Computer Science Department",
      category: "Academic",
      icon: "💻",
      hours: "Open 9:00 AM - 7:00 PM",
      description: "Home to research labs, faculty offices, and student collaboration spaces.",
      floor: "Ground to 4th floor",
      coords: { x: 70, y: 50 }
    },
    {
      id: 4,
      name: "Food Court",
      category: "Dining",
      icon: "🍽️",
      hours: "Open 7:00 AM - 10:00 PM",
      description: "Popular campus spot offering diverse dining options for students.",
      floor: "Ground level",
      coords: { x: 25, y: 35 }
    },
    {
      id: 5,
      name: "Hostel 7",
      category: "Facilities",
      icon: "🏠",
      hours: "24/7 Access",
      description: "One of the flagship student hostels on the IIT Bombay Powai campus.",
      floor: "Multiple floors",
      coords: { x: 50, y: 40 }
    },
    {
      id: 6,
      name: "Sports Complex",
      category: "Facilities",
      icon: "🏋️",
      hours: "Open 6:00 AM - 11:00 PM",
      description: "Gym, courts, and outdoor sports fields for IIT Bombay students.",
      floor: "Ground level",
      coords: { x: 35, y: 70 }
    },
    {
      id: 7,
      name: "Powai Lake Viewpoint",
      category: "Landmarks",
      icon: "🌅",
      hours: "Open 24 hours",
      description: "Scenic campus landmark overlooking the iconic Powai lake.",
      floor: "Outdoor",
      coords: { x: 30, y: 20 }
    }
  ],

  faculty: [
    {
      id: 1,
      name: "Dr. Aniket Pethe",
      title: "Head of Computer Science",
      department: "Computer Science",
      email: "a.pethe@modernscholar.edu",
      office: "Cabin 402, Turing Hall",
      hours: "Tue/Thu 2-4 PM",
      avatar: "👩‍🏫"
    },
    {
      id: 2,
      name: "Prof. Aviraj Singh",
      title: "Professor of Physics",
      department: "Engineering",
      email: "a.singh@modernscholar.edu",
      office: "Lab 215, Science Center",
      hours: "Mon/Wed 1-3 PM",
      avatar: "👨‍🏫"
    },
    {
      id: 3,
      name: "Dr. Yash Desai",
      title: "Associate Professor of Liberal Arts",
      department: "Liberal Arts",
      email: "y.desai@modernscholar.edu",
      office: "Office 310, Humanities Hall",
      hours: "Wed/Fri 2-4 PM",
      avatar: "👩‍🏫"
    },
    {
      id: 4,
      name: "Prof. Devika Nikam",
      title: "Professor of Business Studies",
      department: "Business",
      email: "d.nikam@modernscholar.edu",
      office: "Suite 500, Commerce Building",
      hours: "By appointment",
      avatar: "👨‍🏫"
    },
    {
      id: 5,
      name: "Dr. Omkar Surve",
      title: "Director of Student Affairs",
      department: "Student Services",
      email: "o.surve@modernscholar.edu",
      office: "Building A, Ground Floor",
      hours: "Mon-Fri 9 AM - 5 PM",
      avatar: "👩‍💼"
    }
  ],

  departments: [
    "All Departments",
    "Computer Science",
    "Engineering",
    "Liberal Arts",
    "Business"
  ]
};
