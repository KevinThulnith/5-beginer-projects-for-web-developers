let bt1 = document.getElementById("bt1");
let bt2 = document.getElementById("bt2");
let bt3 = document.getElementById("bt3");
let bt4 = document.getElementById("bt4");
let pagecol = document.getElementById("color");
let mode = 0;

function button(n, m, o) {
  n.addEventListener("click", () => {
    n.classList.add("blue");
    m.classList.remove("blue");
    o.classList.remove("blue");
    if (n.id == "bt1") {
      mode = 0;
    } else if (n.id == "bt2") {
      mode = 1;
    } else {
      mode = 2;
    }
  });
}

function randomcolor() {
  let colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "gold",
    "orange",
    "brown",
    "lightblue",
    "silver",
    "pink",
  ];
  let n = Math.floor(Math.random() * colors.length);
  set(colors[n]);
}

function randomhex() {
  let col = "#";
  let letters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  for (let q = 0; q < 6; q++) {
    let letter = letters[Math.floor(Math.random() * letters.length)];
    col += letter;
  }
  set(col);
}

function randomrgb() {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  let color = "rgb(" + a + "," + b + "," + c + ")";
  set(color);
}

button(bt1, bt2, bt4);
button(bt2, bt1, bt4);
button(bt4, bt1, bt2);

function set(c) {
  document.body.style.backgroundColor = c;
  pagecol.style.color = c;
  pagecol.innerHTML = c;
}

bt3.addEventListener("click", () => {
  if (mode == 1) {
    randomhex();
  } else if (mode == 0) {
    randomcolor();
  } else {
    randomrgb();
  }
});
