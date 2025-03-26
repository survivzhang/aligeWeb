const bestPractices = [
  {
    id: "codeingStandard",
    label: "Choose Industry-Specific Coding Standards",
    description:
      "Adhering to industry-specific coding standards in software engineering makes writing correct code that matches product expectations easier. Writing code that will satisfy the end-users and meet business requirements becomes easier.",
    checked: false,
  },
  {
    id: "codeReadability",
    label: "Focus on Code readability",
    description:
      "Readable code is easy to follow and optimizes space and time.",
    checked: false,
  },
  {
    id: "meaningfulNames",
    label: "Meaningful Names",
    description:
      "Choose meaningful names that convey the purpose of the variable or function. Consistent naming conventions enhance clarity and maintainability.",
    checked: false,
  },
  {
    id: "avoidSingleIdentifier",
    label: "Avoid using a Single Identifier for multiple purposes",
    description:
      "Ascribe a name to each variable that clearly describes its purpose.",
    checked: false,
  },
  {
    id: "addComments",
    label: "Add Comments and Prioritize Documentation",
    description:
      "Comments serve as a form of documentation within the code, explaining the logic, functionality, or purpose of specific sections. Well-placed comments transform complex algorithms or intricate business rules into understandable pieces of information.",
    checked: false,
  },
  {
    id: "efficientDataProcessing",
    label: "Efficient Data Processing",
    description:
      "Divide code into smaller, self-contained modules or functions for reusability and maintainability. Identify inefficient algorithms or data structures and refactor for better performance.",
    checked: false,
  },
  {
    id: "effectiveVersionControl",
    label: "Effective Version Control and Collaboration",
    description:
      "Ensure all developers follow consistent coding techniques. Use automation tools for version control workflows.",
    checked: false,
  },
  {
    id: "effectiveCodeReview",
    label: "Effective Code Review and Refactoring",
    description:
      "Engage QA during refactoring to prevent new bugs. Isolate debugging from refactoring to maintain stability.",
    checked: false,
  },
  {
    id: "formalizeExceptionHandling",
    label: "Try to formalize Exception Handling",
    description:
      "Exception handling involves responding to these exceptions effectively.",
    checked: false,
  },
  {
    id: "securityConsiderations",
    label: "Security and Privacy Considerations",
    description:
      "Extract insights without compromising privacy. Acquire maximum insight from consented data for customer benefit.",
    checked: false,
  },
  {
    id: "standardizeHeaders",
    label: "Standardize Headers for Different Modules",
    description:
      "It is easier to understand and maintain code when the headers of different modules align with a singular format.",
    checked: false,
  },
  {
    id: "turnDailyBackups",
    label: "Turn Daily Backups into an instinct",
    description:
      "Multiple events can trigger data loss – system crash, dead battery, software glitch, hardware damage, etc. To prevent this, save code daily, and after every modification, no matter how minuscule it may be, back up the workflow on TFS, SVN, or any other version control mechanism.",
    checked: false,
  },
  {
    id: "chooseStandards",
    label: "When choosing standards, think Closed vs. Open",
    description:
      "Consider CERT vs. MISRA. CERT emphasizes community cooperation and participation.",
    checked: false,
  },
];

const project = [
  {
    id: 1,
    name: "Blue crew",
    description:
      "A project to develop a mobile application for a local restaurant.",
    skills: ["React Native", "Firebase", "UI/UX Design"],
    status: "Completed",
  },
  {
    id: 2,
    name: "Road to be programmer",
    description: "A website to help beginners learn programming from scratch.",
    skills: ["React", "Node.js", "MongoDB"],
    status: "In Progress",
  },
];

const aboutMe = [
  {
    id: 1,
    hobby: "Basketball",
    description: "I love playing basketball. It helps me relax and stay fit.",
  },
  {
    id: 2,
    hobby: "Reading",
    description: "I enjoy reading books on technology and self-improvement.",
  },
  {
    id: 3,
    hobby: "Traveling",
    description: "I love to travel and explore new places and cultures.",
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
    input.checked = practice.checked;
    input.addEventListener("change", function () {
      const practiceIndex = bestPractices.findIndex(
        (p) => p.id === practice.id
      );
      bestPractices[practiceIndex].checked = input.checked;
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
function updateScore() {
  const checkedPractices = bestPractices.filter((practice) => practice.checked);
  const score = checkedPractices.length;
  document.querySelector("#score").textContent = `Score: ${score}`;
}
