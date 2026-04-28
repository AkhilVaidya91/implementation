// Mock data for The Modern Scholar app

const mockData = {
  user: {
    name: "Alex",
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
      name: "Main Library",
      category: "Libraries",
      icon: "📚",
      hours: "Open until 11:00 PM",
      description: "Primary research and study center",
      floor: "All levels",
      coords: { x: 40, y: 60 }
    },
    {
      id: 2,
      name: "Science Center",
      category: "Academic",
      icon: "🔬",
      hours: "Open until 9:00 PM",
      description: "Labs and lecture halls for STEM courses",
      floor: "Basement to 4th floor",
      coords: { x: 60, y: 45 }
    },
    {
      id: 3,
      name: "Engineering Building",
      category: "Academic",
      icon: "⚙️",
      hours: "Open 24 hours (with access card)",
      description: "Maker space and engineering labs",
      floor: "B2 to 6th floor",
      coords: { x: 70, y: 50 }
    },
    {
      id: 4,
      name: "North Dining Hall",
      category: "Dining",
      icon: "🍽️",
      hours: "Lunch 11:30 AM - 2:00 PM, Dinner 5:00 PM - 8:00 PM",
      description: "Main dining facility with diverse menus",
      floor: "Ground level",
      coords: { x: 25, y: 35 }
    },
    {
      id: 5,
      name: "Commons Cafe",
      category: "Dining",
      icon: "☕",
      hours: "Open 7:00 AM - 10:00 PM",
      description: "Quick bites, coffee, and study space",
      floor: "Ground level",
      coords: { x: 50, y: 40 }
    },
    {
      id: 6,
      name: "Rec Center",
      category: "Facilities",
      icon: "🏋️",
      hours: "Open 6:00 AM - 11:00 PM",
      description: "Gym, pool, and sports courts",
      floor: "Multiple levels",
      coords: { x: 35, y: 70 }
    }
  ],

  faculty: [
    {
      id: 1,
      name: "Dr. Sarah Jenkins",
      title: "Head of Computer Science",
      department: "Computer Science",
      email: "s.jenkins@modernscholar.edu",
      office: "Cabin 402, Turing Hall",
      hours: "Tue/Thu 2-4 PM",
      avatar: "👩‍🏫"
    },
    {
      id: 2,
      name: "Prof. Marcus Chen",
      title: "Professor of Physics",
      department: "Engineering",
      email: "m.chen@modernscholar.edu",
      office: "Lab 215, Science Center",
      hours: "Mon/Wed 1-3 PM",
      avatar: "👨‍🏫"
    },
    {
      id: 3,
      name: "Dr. Elena Rodriguez",
      title: "Associate Professor of Liberal Arts",
      department: "Liberal Arts",
      email: "e.rodriguez@modernscholar.edu",
      office: "Office 310, Humanities Hall",
      hours: "Wed/Fri 2-4 PM",
      avatar: "👩‍🏫"
    },
    {
      id: 4,
      name: "Prof. James Mitchell",
      title: "Professor of Business Studies",
      department: "Business",
      email: "j.mitchell@modernscholar.edu",
      office: "Suite 500, Commerce Building",
      hours: "By appointment",
      avatar: "👨‍🏫"
    },
    {
      id: 5,
      name: "Dr. Aisha Patel",
      title: "Director of Student Affairs",
      department: "Student Services",
      email: "a.patel@modernscholar.edu",
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
