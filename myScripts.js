const bestPractices = [
  {
    id: "1",
    label: "HTML: Always Declare Document Type",
    description:
      "Adhering to industry-specific coding standards in software engineering makes writing correct code that matches product expectations easier. Writing code that will satisfy the end-users and meet business requirements becomes easier.",
    checked: false,
  },
  {
    id: "2",
    label: "HTML: Use Lowercase Element Names",
    description:
      "Readable code is easy to follow and optimizes space and time.",
    checked: false,
  },
  {
    id: "3",
    label: "HTML: Meaningful Names",
    description:
      "Choose meaningful names that convey the purpose of the variable or function. Consistent naming conventions enhance clarity and maintainability.",
    checked: false,
  },
  {
    id: "4",
    label: "HTML: Close All HTML Elements",
    description:
      "Ascribe a name to each variable that clearly describes its purpose.",
    checked: false,
  },
  {
    id: "5",
    label: "HTML: Always Quote Attribute Values",
    description:
      "Comments serve as a form of documentation within the code, explaining the logic, functionality, or purpose of specific sections. Well-placed comments transform complex algorithms or intricate business rules into understandable pieces of information.",
    checked: false,
  },
  {
    id: "6",
    label: "CSS: Use a CSS Preprocessor",
    description:
      "Divide code into smaller, self-contained modules or functions for reusability and maintainability. Identify inefficient algorithms or data structures and refactor for better performance.",
    checked: false,
  },
  {
    id: "7",
    label: "CSS: Organize Your Code",
    description:
      "Ensure all developers follow consistent coding techniques. Use automation tools for version control workflows.",
    checked: false,
  },
  {
    id: "8",
    label: "CSS: Optimize your selector definitions",
    description:
      "Engage QA during refactoring to prevent new bugs. Isolate debugging from refactoring to maintain stability.",
    checked: false,
  },
  {
    id: "9",
    label: "CSS: Understand CSS specificity rules",
    description:
      "Exception handling involves responding to these exceptions effectively.",
    checked: false,
  },
  {
    id: "10",
    label: "CSS: Avoid using the !important property",
    description:
      "Extract insights without compromising privacy. Acquire maximum insight from consented data for customer benefit.",
    checked: false,
  },
  {
    id: "11",
    label: "JavaScript: Use Strict Mode",
    description:
      "It is easier to understand and maintain code when the headers of different modules align with a singular format.",
    checked: false,
  },
  {
    id: "12",
    label: "JavaScript: Avoid Global Variables",
    description:
      "Multiple events can trigger data loss – system crash, dead battery, software glitch, hardware damage, etc. To prevent this, save code daily, and after every modification, no matter how minuscule it may be, back up the workflow on TFS, SVN, or any other version control mechanism.",
    checked: false,
  },
  {
    id: "13",
    label: "JavaScript: Always Declare Local Variables",
    description:
      "Consider CERT vs. MISRA. CERT emphasizes community cooperation and participation.",
    checked: false,
  },
  {
    id: "14",
    label: "JavaScript: Declare Objects with const",
    description:
      "Use version control systems like Git to track changes and collaborate with others. This allows for easy rollback and comparison of code versions.",
    checked: false,
  },
  {
    id: "15",
    label: "JavaScript:Don't Use new Object()",
    description:
      "Use a consistent naming convention for variables and functions. This improves readability and maintainability.",
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
// 修复后的生成函数
function generateAboutMe() {
  const container = document.querySelector(".aboutMe");
  container.innerHTML = `
    <h3 class="text-center mb-4">About Me</h3> <!-- 添加标题 -->
    ${aboutMe
      .map(
        (item) => `
      <div class="row mb-4">
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
    `
      )
      .join("")}
  `;
}

function generateProject() {
  const projectContainer = document.querySelector(".project");
  projectContainer.innerHTML = ""; // 清空现有内容
  const title = document.createElement("h3");
  title.textContent = "Projects";
  title.className = "text-center mb-4 mt-4"; // 添加间距
  projectContainer.appendChild(title);
  project.forEach((item) => {
    // 创建每一行的容器
    const row = document.createElement("div");
    row.className = "row mb-4"; // 添加间距

    // 创建左侧（image）
    const leftCol = document.createElement("div");
    leftCol.className = "col-6";
    leftCol.innerHTML = `
      <div class="projectImage">
        <img src="${item.image}" alt="${item.name}" class="img-fluid" />
      </div>
    `;

    // 创建右侧（name + description + skills + status）
    const rightCol = document.createElement("div");
    rightCol.className = "col-6";
    rightCol.innerHTML = `
      <div class="projectName">
        <h4>${item.name}</h4>
      </div>
      <div class="projectDescription">
        <p>${item.description}</p>
      </div>
      <div class="projectSkills">
        <p>Skills: ${item.skills.join(", ")}</p>
      </div>
      <div class="projectStatus">
        <p>Status: ${item.status}</p>
      </div>
    `;

    // 将左右列添加到行，再添加到容器
    row.appendChild(leftCol);
    row.appendChild(rightCol);

    projectContainer.appendChild(row);
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
}
document.addEventListener("DOMContentLoaded", function () {
  generateBestPracticesList();
  generateProject();
  generateAboutMe();
  updateScore();
});
