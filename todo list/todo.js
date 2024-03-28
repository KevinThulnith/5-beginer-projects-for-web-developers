let add = document.getElementById("btt");
let field = document.getElementById("field");
let list = document.querySelector(".list");
let cancel = document.getElementById("btt1");

cancel.addEventListener("click", () => {
  list.innerHTML = "";
});

add.addEventListener("click", () => {
  if (field.value.length > 0) {
    let listItem = document.createElement("div"); //2
    listItem.classList.add("list-item"); //2
    let chkbox = document.createElement("input"); //3
    chkbox.type = "checkbox"; //3
    listItem.appendChild(chkbox); //3
    let label = document.createElement("label"); //4
    label.innerHTML = field.value; //4
    listItem.appendChild(label); //4
    list.appendChild(listItem); //1
    field.value = "";
    label.addEventListener("click", () => {
      list.removeChild(listItem);
    });
  }
});
