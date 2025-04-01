const bestPractices = [
  {
    id: "1",
    label: "HTML: Always Declare Document Type",
    description:
      "Use <!DOCTYPE html> declaration at the beginning of HTML documents to ensure standards compliance and proper rendering across browsers.",
    checked: false,
  },
  {
    id: "2",
    label: "HTML: Use Lowercase Element Names",
    description:
      "Maintain consistency and improve readability by writing all HTML elements in lowercase, following modern coding conventions.",
    checked: false,
  },
  {
    id: "3",
    label: "HTML: Meaningful Names",
    description:
      "Implement semantic naming for classes and IDs that clearly describe content structure and purpose, enhancing code maintainability.",
    checked: false,
  },
  {
    id: "4",
    label: "HTML: Close All HTML Elements",
    description:
      "Ensure proper nesting and closure of all HTML tags to prevent rendering inconsistencies and validation errors.",
    checked: false,
  },
  {
    id: "5",
    label: "HTML: Always Quote Attribute Values",
    description:
      "Wrap all attribute values in quotes to maintain syntax consistency and prevent parsing errors with special characters.",
    checked: false,
  },
  {
    id: "6",
    label: "CSS: Use a CSS Preprocessor",
    description:
      "Leverage Sass/Less features like variables, mixins, and nested rules to write more maintainable and modular stylesheets.",
    checked: false,
  },
  {
    id: "7",
    label: "CSS: Organize Your Code",
    description:
      "Structure CSS using logical sections (base, components, utilities) with clear comments for better team collaboration.",
    checked: false,
  },
  {
    id: "8",
    label: "CSS: Optimize your selector definitions",
    description:
      "Minimize selector complexity to reduce rendering costs - avoid overqualified selectors and deep nesting.",
    checked: false,
  },
  {
    id: "9",
    label: "CSS: Understand CSS specificity rules",
    description:
      "Master specificity hierarchy to resolve style conflicts effectively without excessive !important usage.",
    checked: false,
  },
  {
    id: "10",
    label: "CSS: Avoid using the !important property",
    description:
      "Reserve !important for utility/override classes only, maintaining predictable cascading behavior.",
    checked: false,
  },
  {
    id: "11",
    label: "JavaScript: Use Strict Mode",
    description:
      "Enable 'use strict' to catch common coding mistakes and prevent unsafe actions like accidental global variables.",
    checked: false,
  },
  {
    id: "12",
    label: "JavaScript: Avoid Global Variables",
    description:
      "Encapsulate code using IIFEs or modules to prevent namespace pollution and potential naming conflicts.",
    checked: false,
  },
  {
    id: "13",
    label: "JavaScript: Always Declare Local Variables",
    description:
      "Explicitly declare variables with let/const to avoid implicit globals and ensure block scoping.",
    checked: false,
  },
  {
    id: "14",
    label: "JavaScript: Declare Objects with const",
    description:
      "Use const for object references while allowing property mutations, preventing accidental reassignment.",
    checked: false,
  },
  {
    id: "15",
    label: "JavaScript: Don't Use new Object()",
    description:
      "Prefer object literals ({}) for clearer syntax and better performance when creating objects.",
    checked: false,
  },
];

const project = [
  {
    id: 1,
    name: "Blue crew",
    description:
      "A project to develop a mobile application for a local restaurant. The app allows customers to browse the menu, place orders, and track delivery status in real-time. It also includes a customer feedback section for continuous improvement. Built with React Native, Firebase, and focused on providing a seamless and user-friendly interface for restaurant customers.",
    skills: ["React Native", "Firebase", "UI/UX Design"],
    status: "Completed",
    image: "./images/blueCrew.png",
  },
  {
    id: 2,
    name: "Road to be programmer",
    description:
      "A website to help beginners learn programming from scratch. The site features interactive tutorials, challenges, and a community forum where users can ask questions and share knowledge. It covers languages like Python, JavaScript, and HTML/CSS, with content tailored for people new to programming. It also includes code editors for hands-on practice and real-time feedback.",
    skills: ["React", "Node.js", "MongoDB"],
    status: "In Progress",
    image: "./images/road.png",
  },
  {
    id: 3,
    name: "Fitness Tracker",
    description:
      "A web application designed to help users track their fitness journey. The app allows users to log workouts, set goals, and monitor their progress through detailed graphs. It provides personalized fitness plans based on user preferences and goals. The backend is powered by Node.js and MongoDB, ensuring efficient storage of data and smooth user experience. Users can also share achievements on social media platforms.",
    skills: ["React", "Node.js", "MongoDB", "Chart.js"],
    status: "In Progress",
    image: "./images/fitness.png",
  },
  {
    id: 4,
    name: "Event Management System",
    description:
      "A comprehensive system to manage events for both organizers and participants. The platform provides tools for event scheduling, registration, ticketing, and live updates. Organizers can track attendee numbers, send reminders, and manage event logistics. Participants can view event details, register, and receive updates on their mobile devices. The application integrates payment gateways for ticket purchases, ensuring a seamless experience for both organizers and attendees.",
    skills: ["Vue.js", "Express", "MySQL", "Stripe API"],
    status: "Planned",
    image: "./images/event.png",
  },
];

const aboutMe = [
  {
    id: 1,
    hobby: "Reading",
    description:
      "I enjoy reading books on technology and self-improvement. Books allow me to gain new perspectives and improve my skills. From deep dives into emerging technologies like artificial intelligence to personal development books, reading helps me grow both professionally and personally. I believe continuous learning is key to success.",
    image: "./images/reading.png",
  },
  {
    id: 2,
    hobby: "Traveling",
    description:
      "I love to travel and explore new places and cultures. Traveling not only provides a break from the usual routine, but it also allows me to immerse myself in diverse cultures, traditions, and languages. Whether it's a backpacking trip through Europe or a cultural tour in Asia, every journey expands my worldview and adds unique experiences to my life.",
    image: "./images/travling.png",
  },
  {
    id: 3,
    hobby: "Photography",
    description:
      "Photography is another passion of mine. I enjoy capturing moments and scenes that tell a story. From landscapes to street photography, I love experimenting with different styles and techniques. Photography gives me the opportunity to express my creativity and preserve memories in a beautiful and meaningful way.",
    image: "./images/photo.png",
  },
  {
    id: 4,
    hobby: "Cooking",
    description:
      "Cooking is something I find both therapeutic and rewarding. Trying new recipes, exploring different cuisines, and experimenting with flavors allows me to unwind and enjoy the process of creating something from scratch. It's also a great way to bond with friends and family, as we share meals and experiences together.",
    image: "./images/cooking.png",
  },
];

function generateBestPracticesList() {
  const listContainer = document.querySelector(".list-group");
  listContainer.innerHTML = "";
  bestPractices.forEach((practice) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    const div = document.createElement("div");
    const input = document.createElement("input");
    input.className = "form-check-input me-1";
    input.type = "checkbox";
    input.id = practice.id;
    const storedState = localStorage.getItem(practice.id);
    if (storedState === "true") {
      input.checked = true;
      practice.checked = true;
    }
    input.addEventListener("change", function () {
      localStorage.setItem(practice.id, this.checked); // Store "true" or "false" this represents the state of the checkbox, not the value of the practice.checked property
      practice.checked = this.checked;
      updateScore();
    });
    const label = document.createElement("label");
    label.className = "form-check-label";
    label.setAttribute("for", practice.id);
    label.textContent = practice.label;
    const description = document.createElement("p");
    description.textContent = practice.description;
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(description);
    listItem.appendChild(div);
    listContainer.appendChild(listItem);
  });
}

// About Me 部分
let currentAboutMeIndex = 0;
const ABOUT_ME_SWITCH_INTERVAL = 5000;
let aboutMeSwitchTimer;

function generateAboutMe() {
  const container = document.querySelector(".aboutMe");
  container.innerHTML = `
    <h3 class="text-center mb-4">About Me</h3>
    <div class="items-container">
      ${aboutMe
        .map(
          (item, index) => `
        <div class="about-item ${index === 0 ? "active" : ""}">
          <div class="row">
            <div class="col-md-6">
              <h4>${item.hobby}</h4>
              <div class="aboutProgress">
                <p>${item.description}</p>
              </div>
            </div>
            <div class="col-md-6">
              <img src="${item.image}" 
                   class="aboutMeImage" 
                   alt="${item.hobby}展示">
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
    <div class="nav-dots text-center mt-4">
      ${aboutMe
        .map(
          (_, index) => `
        <span class="dot ${index === 0 ? "active" : ""}">●</span>
      `
        )
        .join("")}
    </div>
  `;

  const dots = container.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => switchAboutMeItem(index));
  });

  startAboutMeAutoSwitch();
}

function switchAboutMeItem(newIndex) {
  const items = document.querySelectorAll(".about-item");
  const dots = document.querySelectorAll(".dot");

  // 边界处理
  if (newIndex < 0) newIndex = items.length - 1;
  if (newIndex >= items.length) newIndex = 0;

  // 移除旧状态
  items[currentAboutMeIndex].classList.remove("active");
  dots[currentAboutMeIndex].classList.remove("active");

  // 添加新状态
  items[newIndex].classList.add("active");
  dots[newIndex].classList.add("active");

  // 更新索引
  currentAboutMeIndex = newIndex;

  // 重置定时器
  resetAboutMeAutoSwitch();
}

function startAboutMeAutoSwitch() {
  aboutMeSwitchTimer = setInterval(() => {
    switchAboutMeItem(currentAboutMeIndex + 1);
  }, ABOUT_ME_SWITCH_INTERVAL);
}

function resetAboutMeAutoSwitch() {
  clearInterval(aboutMeSwitchTimer);
  startAboutMeAutoSwitch();
}

// Project 部分
let currentProjectIndex = 0;
const PROJECT_SWITCH_INTERVAL = 8000;
let projectSwitchTimer;

function generateProject() {
  const projectContainer = document.querySelector(".project");
  projectContainer.innerHTML = `
    <h3 class="text-center mb-4 mt-4">Projects</h3>
    <div class="project-carousel">
      <div class="project-items">
        ${project
          .map(
            (item, index) => `
          <div class="project-item ${index === 0 ? "active" : ""}">
            <div class="row g-4">
              <div class="col-md-6">
                <div class="project-image">
                  <img src="${item.image}" 
                       alt="${item.name}" 
                       class="img-fluid rounded-3 shadow" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="project-content">
                  <h4 class="mb-3">${item.name}</h4>
                  <p class="mb-4">${item.description}</p>
                  <div class="project-skills mb-3">
                    ${item.skills
                      .map(
                        (skill) =>
                          `<span class="badge bg-primary me-2">${skill}</span>`
                      )
                      .join("")}
                  </div>
                  <div class="project-status">
                    <span class="status-indicator ${
                      item.status === "Completed" ? "completed" : "in-progress"
                    }"></span>
                    ${item.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="carousel-controls">
        <button class="carousel-prev btn btn-secondary">❮</button>
        <div class="carousel-dots">
          ${project
            .map(
              (_, index) => `
            <span class="dot ${index === 0 ? "active" : ""}">●</span>
          `
            )
            .join("")}
        </div>
        <button class="carousel-next btn btn-secondary">❯</button>
      </div>
    </div>
  `;

  const dots = projectContainer.querySelectorAll(".carousel-dots .dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => switchProjectItem(index));
  });

  // 按钮事件
  projectContainer
    .querySelector(".carousel-prev")
    .addEventListener("click", () =>
      switchProjectItem(currentProjectIndex - 1)
    );
  projectContainer
    .querySelector(".carousel-next")
    .addEventListener("click", () =>
      switchProjectItem(currentProjectIndex + 1)
    );

  startProjectAutoSwitch();
}

function switchProjectItem(newIndex) {
  const items = document.querySelectorAll(".project-item");
  const dots = document.querySelectorAll(".carousel-dots .dot");

  // 边界处理
  if (newIndex < 0) newIndex = items.length - 1;
  if (newIndex >= items.length) newIndex = 0;

  // 移除旧状态
  items[currentProjectIndex].classList.remove("active");
  dots[currentProjectIndex].classList.remove("active");

  // 添加新状态
  items[newIndex].classList.add("active");
  dots[newIndex].classList.add("active");

  // 更新索引
  currentProjectIndex = newIndex;

  // 重置定时器
  resetProjectAutoSwitch();
}

function startProjectAutoSwitch() {
  projectSwitchTimer = setInterval(() => {
    switchProjectItem(currentProjectIndex + 1);
  }, PROJECT_SWITCH_INTERVAL);
}

function resetProjectAutoSwitch() {
  clearInterval(projectSwitchTimer);
  startProjectAutoSwitch();
}

function updateScore() {
  const checkedPractices = bestPractices.filter((practice) => practice.checked);
  const score = checkedPractices.length;
  document.querySelector(".grade").textContent = `Your Score: ${score}`;
  if (score <= 5) {
    document.querySelector(".level").textContent =
      "Your Level: Beginner Developer";
  } else if (score <= 10) {
    document.querySelector(".level").textContent =
      "Your Level: Intermediate Developer";
  } else {
    document.querySelector(".level").textContent =
      "Your Level: Expert Developer";
  }
  const successBanner = document.querySelector(".success-banner");
  if (score > 10) {
    if (!successBanner) createSuccessBanner();
    fetchCatReward();
  } else if (successBanner) {
    successBanner.remove();
  }
}
function createSuccessBanner() {
  const standardsList = document.querySelector(".grade");
  const banner = document.createElement("div");
  banner.className = "success-banner mt-3 p-3 bg-light border rounded";
  banner.innerHTML = `
    <h5 class="text-success">🎉 You Win!</h5>
    <div class="reward-content"></div>
  `;
  standardsList.before(banner); // 在标准列表后插入
}

// 获取猫咪奖励（保持原有功能）
async function fetchCatReward() {
  try {
    // 获取猫咪图片
    const imageResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search"
    );
    const imageData = await imageResponse.json();
    const catImageUrl = imageData[0].url;

    const rewardContent = document.querySelector(".reward-content");
    if (rewardContent) {
      rewardContent.innerHTML = `
        <img src="${catImageUrl}" 
             alt="Victory Cat" 
             class="img-fluid rounded">
      `;
    }
  } catch (error) {
    console.log("Failed to fetch cat:", error);

    const rewardContent = document.querySelector(".reward-content");
    if (rewardContent) {
      rewardContent.innerHTML = `
        <p class="text-danger">Unable to fetch cat reward.</p>
      `;
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  generateBestPracticesList();
  generateProject();
  generateAboutMe();
  updateScore();
});
