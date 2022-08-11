//This function will create and insert/append the elements needed to display a "page" of nine students

function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  const studentList = document.querySelector(".student-list");

  studentList.innerHTML = "";
  let studentItem = "";

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      studentItem += `
    <li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
      <h3>${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email}</span>
    </div>
    <div class="joined-details">
      <span class="date">${list[i].registered.date}</span>
    </div>
  </li>`;
    }
  }
  studentList.insertAdjacentHTML("beforeend", studentItem);
}
showPage(data, 1);

//Create the `addPagination` function
//This function will create and insert/append the elements needed for the pagination buttons
//*/
function addPagination(list) {
  const numOfPages = Math.ceil(list.length / 9);
  const linkList = document.querySelector(".link-list");

  linkList.innerHTML = "";
  let button = "";

  for (let i = 1; i <= numOfPages; i++) {
    button += `<li>
  <button type="button">${[i]}</button></li>`;
  }
  linkList.insertAdjacentHTML("beforeend", button);

  let buttonActive = document.querySelector("button");
  buttonActive.className = "active";

  linkList.addEventListener("click", (e) => {
    const buttonClicked = e.target;
    if (buttonClicked.tagName === "BUTTON") {
      const activeClassButton = document.querySelector(".active");
      activeClassButton[0].className = "";
      buttonClicked.className = "active";
      showPage(list, buttonClicked.textContent);
    }
  });
}

showPage(data, 1);
addPagination(data);
