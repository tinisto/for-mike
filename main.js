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
  balldiv.addEventListener("dragstart", function dragstartBall() {
    console.log("dragstartBall", dragstartBall);
    draggedBall = this;
    setTimeout(() => {
      this.style.display = "none";
    }, 0);
  });
  balldiv.addEventListener("dragend", function dragendBall() {
    this.style.display = "block";
    console.log("dragendBall", dragendBall);
  });

  for (let y_ball = 0; y_ball < lists_ball.length; y_ball++) {
    const element_ball = lists_ball[y_ball];
    element_ball.addEventListener("dragenter", function dragenterBall() {
      console.log("dragenterBall", dragenterBall);
    });
    element_ball.addEventListener("dragleave", function dragleaveBall() {
      console.log("dragleaveBall", dragleaveBall);
    });
    element_ball.addEventListener("dragover", function dragoverBall(e) {
      e.preventDefault();
      console.log("dragoverBall", dragoverBall);
    });
    element_ball.addEventListener("drop", function dropBall() {
      console.log("dropBall", dropBall);
      this.append(draggedBall);
    });
  }
}

// тут вывожу белые блоки
for (let i = 0; i < list_items.length; i++) {
  const elementOfList_items = list_items[i];
  elementOfList_items.addEventListener("dragstart", function dragstartSquare() {
    console.log("dragstartSquare", dragstartSquare);
    setTimeout(() => {
      this.style.display = "none";
      draggedElement = thisB;
    }, 0);
  });
  elementOfList_items.addEventListener("dragend", function dragendSquare() {
    this.style.display = "block";
    console.log("dragendSquare", dragendSquare);
  });

  // sort lists div
  for (let j = 0; j < lists_square.length; j++) {
    const elementOfLists = lists_square[j];
    elementOfLists.addEventListener("dragenter", function dragenterSquare() {
      this.style.backgroundColor = "rgba(0,0,0,0.2)";
      console.log("dragenterSquare", dragenterSquare);
    });
    elementOfLists.addEventListener("dragleave", function dragleaveSquare() {
      this.style.backgroundColor = "rgba(0,0,0,0.1)";
      console.log("dragleaveSquare", dragleaveSquare);
    });
    elementOfLists.addEventListener("drop", function dropSquare() {
      this.style.backgroundColor = "rgba(0,0,0,0.1)";
      this.append(draggedElement);
      console.log("dropSquare", dropSquare);
    });
    elementOfLists.addEventListener("dragover", function dragoverSquare(e) {
      e.preventDefault();
      console.log("dragoverSquare", dragoverSquare);
    });
  }
}
