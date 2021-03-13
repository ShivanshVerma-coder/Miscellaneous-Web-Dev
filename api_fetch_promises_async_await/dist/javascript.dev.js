"use strict";

var timer;
var lastbreedbeforestop;
var i = 0;

function start() {
  var breedlist, data;
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://dog.ceo/api/breeds/list/all"));

        case 2:
          breedlist = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(breedlist.json());

        case 5:
          data = _context.sent;
          createbreedlist(data.message);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

start();

function createbreedlist(data) {
  document.querySelector(".breedlist").insertAdjacentHTML("beforeend", "\n    ".concat(Object.keys(data).map(function (breed) {
    return "<option>".concat(breed, "</option>");
  }).join(''), "\n"));
}

function findimages(e) {
  var imageurlobject, imageurljson;
  return regeneratorRuntime.async(function findimages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          lastbreedbeforestop = e;

          if (!(e != "Choose a Breed")) {
            _context2.next = 16;
            break;
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch("https://dog.ceo/api/breed/".concat(e, "/images")));

        case 4:
          imageurlobject = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(imageurlobject.json());

        case 7:
          imageurljson = _context2.sent;
          imageurlarray = imageurljson.message;
          clearInterval(timer);
          document.querySelector(".images").innerHTML = "\n        <img src=\"".concat(imageurlarray[i], "\" alt=\"\" width=\"500px\" >");
          _context2.next = 13;
          return regeneratorRuntime.awrap(setInterval(function () {
            document.querySelector(".images").innerHTML = "\n            <img src=\"".concat(imageurlarray[i], "\" alt=\"\" width=\"500px\" >");

            if (i == imageurlarray.length) {
              i = -1;
            }

            i = i + 1;
          }, 4000));

        case 13:
          timer = _context2.sent;
          _context2.next = 19;
          break;

        case 16:
          clearInterval(timer);
          document.querySelector(".images").innerHTML = "";
          return _context2.abrupt("return");

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function stop() {
  clearInterval(timer);
}

function play() {
  clearInterval(timer);
  findimages(lastbreedbeforestop);
}

function previous() {
  clearInterval(timer);
  i = i - 1;
  document.querySelector(".images").innerHTML = "\n            <img src=\"".concat(imageurlarray[i], "\" alt=\"\" width=\"500px\" >");
}

function doj(ppp) {
  i = 0;
  clearInterval(timer);
  findimages(ppp);
}