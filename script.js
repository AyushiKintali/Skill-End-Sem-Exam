const courseForm = document.getElementById("courseForm");
const courseList = document.getElementById("courseList");

if (courseForm) {
  courseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("studentName").value;
    const course = document.getElementById("courseName").value;

    const li = document.createElement("li");
    li.textContent = `${name} registered for ${course}`;
    courseList.appendChild(li);

    courseForm.reset();
  });
}
