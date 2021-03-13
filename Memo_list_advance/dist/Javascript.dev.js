"use strict";

setInterval(function () {
  document.querySelector('.nameanimation').classList.toggle("nowanimation");
}, 4000);
document.querySelector('.taskadder').addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    addnow();
    document.querySelector('.taskadder').value = '';
    document.querySelector('.taskadder').focus();
  }
});

function addnow() {
  var taskobject = document.querySelector(".taskadder");
  task = taskobject.value;

  if (task != '' && task != ' ') {
    document.querySelector(".alltasks").insertAdjacentHTML("beforeend", "<div class=\"task\">\n    <p>".concat(task, "</p>\n    <button class=\"delete\" onclick=\"removetask(this)\"></button>\n</div>\n    "));
  }
}

function removetask(e) {
  e.parentElement.remove();
}