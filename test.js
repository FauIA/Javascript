let qu = (x) => {
  return document.querySelector(x);
};

let list = qu(".list"),
  button = qu(".button"),
  text = qu(".text"),
  del,
  parent = qu(".parent");
function create() {
  if (text.value == "") {
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.className = "dele";

    li.append(text.value, span);

    list.append(li);

    span.addEventListener("click", function (e) {
      set();
      e.target.parentElement.remove();
    });

    li.addEventListener("click", function (e) {
      set();
      let bo = e.target.classList.contains("checked");
      if (bo) {
        e.target.classList.remove("checked");
      } else {
        e.target.classList.add("checked");
      }
    });

    clear();
  }

  set();
}

button.addEventListener("click", function () {
  clear();
});
function clear() {
  text.value = "";
}
text.addEventListener("change", function (e) {
  create();
  set();
});

function show() {
  list.innerHTML = localStorage.getItem("save");
}
function set() {
  localStorage.setItem("save", list.innerHTML);
}

show();

function dleel() {
  del = document.getElementsByClassName("dele");

  for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", function (e) {
      e.target.parentElement.remove();
      set();
    });
  }
}

dleel();
