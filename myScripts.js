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

// 全局变量
let currentIndex = 0; // 当前显示项的索引
let autoSwitchTimer; // 自动切换定时器
const SWITCH_INTERVAL = 5000; // 自动切换间隔（5秒）

// 生成About Me内容
function generateAboutMe() {
  const container = document.querySelector(".aboutMe");

  // 生成HTML结构
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
              <p>${item.description}</p>
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
    <div class="nav-dots text-center mt-4"></div>
  `;

  // 创建导航点
  const dotsContainer = container.querySelector(".nav-dots");
  aboutMe.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = `dot ${index === 0 ? "active" : ""}`;
    dot.innerHTML = "●";
    dot.addEventListener("click", () => switchItem(index));
    dotsContainer.appendChild(dot);
  });

  // 键盘导航事件
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevItem();
    if (e.key === "ArrowRight") nextItem();
  });

  // 初始化自动切换
  startAutoSwitch();
}

// 切换展示项
function switchItem(newIndex) {
  const items = document.querySelectorAll(".about-item");
  const dots = document.querySelectorAll(".dot");

  // 边界检查
  if (newIndex < 0) newIndex = items.length - 1;
  if (newIndex >= items.length) newIndex = 0;

  // 移除旧项的激活状态
  items[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");

  // 更新当前索引
  currentIndex = newIndex;

  // 添加新项的激活状态
  items[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");

  // 重置自动切换定时器
  resetAutoSwitch();
}

// 切换到下一项
function nextItem() {
  switchItem(currentIndex + 1);
}

// 切换到前一项
function prevItem() {
  switchItem(currentIndex - 1);
}

// 启动自动切换
function startAutoSwitch() {
  autoSwitchTimer = setInterval(nextItem, SWITCH_INTERVAL);

  // 页面隐藏时暂停自动切换
  document.addEventListener("visibilitychange", handleVisibilityChange);
}

// 重置自动切换
function resetAutoSwitch() {
  clearInterval(autoSwitchTimer);
  startAutoSwitch();
}

// 处理页面可见性变化
function handleVisibilityChange() {
  if (document.hidden) {
    clearInterval(autoSwitchTimer);
  } else {
    startAutoSwitch();
  }
}

let currentProject = 0;
let projectInterval;

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
                  <img src="${item.image}" alt="${
              item.name
            }" class="img-fluid rounded-3 shadow" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="project-content">
                  <h4 class="mb-3">${item.name}</h4>
                  <p class="text-muted mb-4">${item.description}</p>
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
        <div class="carousel-dots"></div>
        <button class="carousel-next btn btn-secondary">❯</button>
      </div>
    </div>
  `;

  // 初始化控制元素
  initCarouselControls();
  startAutoCarousel();
}

function initCarouselControls() {
  // 创建指示点
  const dotsContainer = document.querySelector(".carousel-dots");
  project.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = `dot ${index === 0 ? "active" : ""}`;
    dot.innerHTML = "●";
    dot.addEventListener("click", () => switchProject(index));
    dotsContainer.appendChild(dot);
  });

  // 按钮事件
  document
    .querySelector(".carousel-prev")
    .addEventListener("click", prevProject);
  document
    .querySelector(".carousel-next")
    .addEventListener("click", nextProject);

  // 键盘控制
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevProject();
    if (e.key === "ArrowRight") nextProject();
  });
}

function switchProject(index) {
  const items = document.querySelectorAll(".project-item");
  const dots = document.querySelectorAll(".carousel-dots .dot"); // 修正选择器

  // 移除所有激活状态
  items.forEach((item) => item.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // 计算有效索引
  currentProject = (index + project.length) % project.length;

  // 添加新激活状态
  items[currentProject].classList.add("active");
  dots[currentProject].classList.add("active"); // 同步更新导航点
}

function nextProject() {
  switchProject(currentProject + 1);
}

function prevProject() {
  switchProject(currentProject - 1);
}

function startAutoCarousel() {
  projectInterval = setInterval(nextProject, 8000);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearInterval(projectInterval);
    } else {
      startAutoCarousel();
    }
  });
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
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
    const data = await response.json();

    const rewardContent = document.querySelector(".reward-content");
    if (rewardContent) {
      rewardContent.innerHTML = `
        <p class="mb-2">${data.text}</p>
        <img src="https://cataas.com/cat?${Date.now()}" 
             alt="Victory Cat" 
             class="img-fluid rounded">
      `;
    }
  } catch (error) {
    console.log("Failed to fetch cat:", error);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  generateBestPracticesList();
  generateProject();
  generateAboutMe();
  updateScore();
});
