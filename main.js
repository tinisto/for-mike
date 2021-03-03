const list_items = document.querySelectorAll(".list-item");
let lists_ball = document.querySelectorAll(".list");
let lists_square = document.querySelectorAll(".list");

let draggedElement;
let draggedBall;

const ball = document.querySelector(".ball");
const colorBall = ["red", "orange", "blue", "green", "purple", "yellow"];

// тут вывожу шарики и даю им random цвет
for (let i_ball = 0; i_ball < colorBall.length; i_ball++) {
  const balldiv = document.createElement("div");
  const randomColor = Math.floor(Math.random() * colorBall.length);
  balldiv.style.backgroundColor = colorBall[randomColor];
  balldiv.style.width = "50px";
  balldiv.style.height = "50px";
  balldiv.style.borderRadius = "25px";
  balldiv.setAttribute("draggable", "true");
  ball.append(balldiv);
  balldiv.addEventListener("dragstart", function dragstartball() {
    draggedBall = this;
    setTimeout(() => {
      this.style.display = "none";
    }, 0);
  });
  balldiv.addEventListener("dragend", function dragendball() {
    this.style.display = "block";
  });

  for (let y_ball = 0; y_ball < lists_ball.length; y_ball++) {
    const element_ball = lists_ball[y_ball];
    element_ball.addEventListener("dragenter", function dragenterball() {});
    element_ball.addEventListener("dragleave", function dragleaveball() {});
    element_ball.addEventListener("dragover", function dragoverball(e) {
      e.preventDefault();
    });
    element_ball.addEventListener("drop", function dropball() {
      this.append(draggedBall);
    });
  }
}

// тут вывожу белые блоки
for (let i = 0; i < list_items.length; i++) {
  const elementOfList_items = list_items[i];
  elementOfList_items.addEventListener("dragstart", function dragstartsquare() {
    setTimeout(() => {
      this.style.display = "none";
      draggedElement = this;
    }, 0);
  });
  elementOfList_items.addEventListener("dragend", function dragendsquare() {
    this.style.display = "block";
  });

  // sort lists div
  for (let j = 0; j < lists_square.length; j++) {
    const elementOfLists = lists_square[j];
    elementOfLists.addEventListener("dragenter", function dragentersquare() {
      this.style.backgroundColor = "rgba(0,0,0,0.2)";
    });
    elementOfLists.addEventListener("dragleave", function dragleavesquare() {
      this.style.backgroundColor = "rgba(0,0,0,0.1)";
    });
    elementOfLists.addEventListener("drop", function dropsquare() {
      this.style.backgroundColor = "rgba(0,0,0,0.1)";
      this.append(draggedElement);
    });
    elementOfLists.addEventListener("dragover", function dragoversquare(e) {
      e.preventDefault();
    });
  }
}
