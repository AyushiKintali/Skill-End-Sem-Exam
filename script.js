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
