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

const eventForm = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

if (eventForm) {
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("eventTitle").value;
    const date = document.getElementById("eventDate").value;

    const li = document.createElement("li");
    li.textContent = `${title} — ${date}`;
    eventList.appendChild(li);

    eventForm.reset();
  });
}
