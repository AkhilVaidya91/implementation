// The Modern Scholar - Main Application

let currentScreen = "home";
let directorySortBy = "All Departments";

// ===========================
// UTILITY FUNCTIONS
// ===========================

function formatTime(time) {
  const date = new Date();
  const now = new Date();
  const timeDiff = Math.floor((now - date) / 1000 / 60);
  
  if (timeDiff < 1) return "Just now";
  if (timeDiff < 60) return `${timeDiff} mins ago`;
  if (timeDiff < 1440) return `${Math.floor(timeDiff / 60)} hrs ago`;
  return `${Math.floor(timeDiff / 1440)} days ago`;
}

function getStatusChipClass(status) {
  if (status === "Busy") return "chip-tertiary";
  if (status === "Quiet") return "chip-secondary";
  if (status === "Available") return "chip-secondary";
  return "chip-primary";
}

function getStatusColor(status) {
  if (status === "Busy") return "#c9003c";
  if (status === "Quiet") return "#a0f7eb";
  return "#006b5f";
}

// ===========================
// COMPONENT BUILDERS
// ===========================

function renderGreeting() {
  return `
    <div class="greeting">Good Morning, ${mockData.user.name}.</div>
    <div class="greeting-subtitle">Your first class, Advanced Physics, starts in 45 minutes at the Science Center.</div>
  `;
}

function renderEventCard() {
  const event = mockData.events[0];
  return `
    <div class="card-hero">
      <div class="flex-between" style="margin-bottom: var(--spacing-md);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
        </svg>
        <span class="label-md">Events</span>
      </div>
      <div style="margin-bottom: var(--spacing-md);">
        <div style="font-size: 1.25rem; margin-bottom: var(--spacing-xs);">${event.date}</div>
        <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: var(--spacing-xs);">${event.title}</h3>
        <div style="display: flex; gap: var(--spacing-sm); font-size: 0.875rem; opacity: 0.9;">
          📍 ${event.location} • ${event.time}
        </div>
      </div>
      <a href="#" style="color: inherit; text-decoration: none; font-weight: 500; display: inline-block;">Browse calendar →</a>
    </div>
  `;
}

function renderCampusMapCard() {
  return `
    <div class="card-hero" style="padding: var(--spacing-xl);">
      <div class="flex-between" style="margin-bottom: var(--spacing-lg);">
        <h3 style="font-size: 1.5rem; font-weight: 600;">Campus Map</h3>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      </div>
      <p style="font-size: 0.875rem; line-height: 1.5;">Find your next class, locate study spots, and explore the grounds.</p>
    </div>
  `;
}

function renderNoticesFeed() {
  return mockData.notices.map(notice => {
    const isAlert = notice.type === "alert";
    return `
      <div class="list-item ${isAlert ? "alert" : ""}">
        <div class="list-item-header">
          <div class="list-item-title">${notice.title}</div>
          ${isAlert ? `<span class="badge-new">URGENT</span>` : ""}
        </div>
        <div class="list-item-description">${notice.content}</div>
        <div class="list-item-meta">
          <span>${notice.timestamp}</span>
        </div>
      </div>
    `;
  }).join("");
}

function renderPulseItems() {
  return mockData.campusPulse.map(item => `
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-title">${item.name}</div>
          <div class="list-item-meta">
            <span>${item.type}</span>
          </div>
        </div>
        <span class="chip ${getStatusChipClass(item.status)}">${item.status}</span>
      </div>
      <div class="list-item-description">${item.detail || ""} ${item.description}</div>
    </div>
  `).join("");
}

function renderFacultyCard(faculty) {
  return `
    <div class="faculty-card">
      <div class="faculty-avatar"></div>
      <div class="faculty-info">
        <div class="faculty-name">${faculty.name}</div>
        <div class="faculty-title">${faculty.title}</div>
        <div class="faculty-detail">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          ${faculty.office}
        </div>
        <div class="faculty-detail">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          ${faculty.email}
        </div>
        <div class="faculty-detail">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
          ${faculty.hours}
        </div>
      </div>
    </div>
  `;
}

// ===========================
// SCREEN RENDERERS
// ===========================

function renderHomeScreen() {
  return `
    <div class="screen-content">
      ${renderGreeting()}
      
      <div style="margin-top: var(--spacing-2xl);">
        ${renderCampusMapCard()}
      </div>

      <div style="margin-top: var(--spacing-2xl);">
        <div class="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display: inline; margin-right: var(--spacing-sm); vertical-align: middle;">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V2c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 3.36 6 5.92 6 9v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
          Notices
          <span class="badge-new" style="margin-left: auto;">3 New</span>
        </div>
        ${renderNoticesFeed()}
      </div>
    </div>
  `;
}

function renderEventsScreen() {
  return `
    <div class="screen-content">
      <h2 class="section-title">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="display: inline; margin-right: var(--spacing-md); vertical-align: middle;">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
        </svg>
        Events
      </h2>

      ${renderEventCard()}

      <div style="margin-top: var(--spacing-2xl);">
        <h3 class="section-title">Upcoming</h3>
        ${mockData.events.slice(1).map(event => `
          <div class="list-item">
            <div class="list-item-header">
              <div>
                <div class="list-item-title">${event.title}</div>
                <div class="list-item-meta">
                  📍 ${event.location}
                </div>
              </div>
            </div>
            <div style="font-size: 0.875rem; color: var(--on-surface-variant); margin-top: var(--spacing-sm);">${event.date} • ${event.time}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderCampusPulseScreen() {
  return `
    <div class="screen-content">
      <h2 class="section-title">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="display: inline; margin-right: var(--spacing-md); vertical-align: middle;">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5s.67 1.5 1.5 1.5z"/>
        </svg>
        Campus Pulse
      </h2>
      <p class="section-subtitle">Live status of campus facilities</p>

      ${renderPulseItems()}
    </div>
  `;
}

function renderNoticesScreen() {
  return `
    <div class="screen-content">
      <h2 class="section-title">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="display: inline; margin-right: var(--spacing-md); vertical-align: middle;">
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V2c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 3.36 6 5.92 6 9v5l-2 2v1h16v-1l-2-2z"/>
        </svg>
        Campus Notices
      </h2>
      <div class="flex-between" style="margin-bottom: var(--spacing-lg);">
        <span class="section-subtitle" style="margin: 0;">All updates</span>
        <span class="label-md" style="color: var(--secondary);">Live Updates</span>
      </div>

      ${renderNoticesFeed()}
    </div>
  `;
}

function renderMapScreen() {
  const selectedCategory = document.querySelector(".category-btn.active")?.dataset.category || "All";
  
  const filteredLocations = selectedCategory === "All" 
    ? mockData.locations 
    : mockData.locations.filter(loc => loc.category === selectedCategory);

  return `
    <div class="screen-content">
      <h2 class="section-title" style="margin-top: 0;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="display: inline; margin-right: var(--spacing-md); vertical-align: middle;">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5s.67 1.5 1.5 1.5z"/>
        </svg>
        Campus Map
      </h2>

      <div class="search-container">
        <input type="text" class="input-field" id="map-search" placeholder="Search buildings, rooms, or departments..." />
        <button class="filter-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
          </svg>
        </button>
      </div>

      <div class="category-filter">
        <button class="category-btn active" data-category="All">All Locations</button>
        <button class="category-btn" data-category="Academic">Academic</button>
        <button class="category-btn" data-category="Dining">Dining</button>
        <button class="category-btn" data-category="Libraries">Libraries</button>
        <button class="category-btn" data-category="Facilities">Facilities</button>
      </div>

      <div class="map-container">
        <div class="map-placeholder">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5s.67 1.5 1.5 1.5z"/>
          </svg>
          <div>Interactive Map</div>
        </div>
      </div>

      <h3 class="section-title">Locations</h3>
      ${filteredLocations.map(loc => `
        <div class="list-item">
          <div class="list-item-header">
            <div>
              <div class="list-item-title">${loc.icon} ${loc.name}</div>
              <div class="list-item-meta">
                <span>${loc.category}</span>
              </div>
            </div>
          </div>
          <div class="list-item-description">${loc.description}</div>
          <div class="list-item-meta">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            ${loc.hours}
          </div>
          <button class="btn btn-primary btn-sm" style="margin-top: var(--spacing-md);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.364 5.636l-12.728 12.728M6.636 5.636l12.728 12.728"/>
            </svg>
            Directions
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

function renderDirectoryScreen() {
  let filteredFaculty = mockData.faculty;

  if (directorySortBy !== "All Departments") {
    filteredFaculty = filteredFaculty.filter(f => f.department === directorySortBy);
  }

  const searchQuery = document.getElementById("directory-search")?.value.toLowerCase() || "";
  if (searchQuery) {
    filteredFaculty = filteredFaculty.filter(f => 
      f.name.toLowerCase().includes(searchQuery) || 
      f.title.toLowerCase().includes(searchQuery)
    );
  }

  return `
    <div class="screen-content">
      <h2 class="section-title" style="margin-top: 0;">Directory</h2>
      <p class="section-subtitle">Search for faculty, staff, and campus departments.</p>

      <div class="search-container">
        <input type="text" class="input-field" id="directory-search" placeholder="Search by name, department, or cabin..." />
      </div>

      <div style="margin-bottom: var(--spacing-lg);">
        <div class="label-md" style="color: var(--on-surface-variant); margin-bottom: var(--spacing-md); display: block;">BROWSE BY DEPARTMENT</div>
        <div class="category-filter">
          ${mockData.departments.map(dept => `
            <button class="category-btn ${directorySortBy === dept ? "active" : ""}" data-dept="${dept}">
              ${dept}
            </button>
          `).join("")}
        </div>
      </div>

      <div>
        ${filteredFaculty.length > 0 ? filteredFaculty.map(faculty => renderFacultyCard(faculty)).join("") : `
          <div class="text-center" style="padding: var(--spacing-2xl);">
            <p class="text-muted">No faculty members found.</p>
          </div>
        `}
      </div>

      ${filteredFaculty.length > 0 ? `
        <button class="btn btn-secondary" style="margin-top: var(--spacing-lg); margin-bottom: var(--spacing-lg);">
          Schedule Appointment
        </button>
      ` : ""}
    </div>
  `;
}

// ===========================
// SCREEN ROUTING
// ===========================

function renderScreen(screenName) {
  const mainContent = document.getElementById("app-main");
  let content = "";

  switch (screenName) {
    case "home":
      content = renderHomeScreen();
      break;
    case "events":
      content = renderEventsScreen();
      break;
    case "notices":
      content = renderNoticesScreen();
      break;
    case "map":
      content = renderMapScreen();
      break;
    case "directory":
      content = renderDirectoryScreen();
      break;
    default:
      content = renderHomeScreen();
  }

  mainContent.innerHTML = content;
  attachEventListeners();
}

function attachEventListeners() {
  // Category filter buttons for map screen
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      if (currentScreen === "map") {
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        renderScreen("map");
      } else if (currentScreen === "directory") {
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        directorySortBy = e.target.dataset.dept;
        renderScreen("directory");
      }
    });
  });

  // Directory search
  const dirSearch = document.getElementById("directory-search");
  if (dirSearch) {
    dirSearch.addEventListener("input", () => {
      renderScreen("directory");
    });
  }

  // Map search (placeholder)
  const mapSearch = document.getElementById("map-search");
  if (mapSearch) {
    mapSearch.addEventListener("input", (e) => {
      // Could add filtering logic here
    });
  }
}

// ===========================
// NAVIGATION
// ===========================

function switchScreen(screenName) {
  currentScreen = screenName;
  renderScreen(screenName);

  // Update nav bar
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
    if (item.dataset.screen === screenName) {
      item.classList.add("active");
    }
  });

  // Scroll to top
  document.querySelector(".app-main").scrollTop = 0;
}

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  // Initial render
  renderScreen("home");

  // Nav bar listeners
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const screen = item.dataset.screen;
      switchScreen(screen);
    });
  });

  // Search button (placeholder)
  document.querySelector(".search-btn").addEventListener("click", () => {
    console.log("Search clicked");
  });
});
