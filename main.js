// javascript tidak harus selalu menggunakan ";"

// console.log("Hello Biya");
// alert("Ada Notifikasi");
// prompt("Pinjam Seratus");

// var Promnet = "Coding is Easy";
// console.log(Promnet);
// var Promnet = "Coding not Easy";
// console.log(Promnet);
// var Promnet = "nothing is possible"
// console.log(Promnet);

// let Promnet = "Coding is Fun";
// console.log(Promnet);
// let Promnet = "Coding is Fun";
// console.log(Promnet);

// const Promnet = "Coding is My Life";
// console.log(Promnet);
// const Promnet = "Coding not My Life";
// console.log(Promnet);

// let totalPoin = prompt("Masukkan Poin Anda");
// if (totalPoin >= 100) {
//   document.write("Congratulation");
// } else {
//   document.write("Keep Trying");
// }

// let x = 6;
// let y = 3;

// console.log(x < 10 && y > 1);
// console.log(x < 10 && y < 1);
// console.log(x == 5 || y == 5);
// console.log(x == 6 || y == 5);
// console.log(!x == y);

// document.write(x < 10 && y > 1);
// document.write("<br>");
// document.write(x < 10 && y < 1);
// document.write("<br>");
// document.write(x == 5 || y == 5);
// document.write("<br>");
// document.write(x == 6 || y == 5);
// document.write("<br>");
// document.write(!x == y);
// document.write("<br>");

// let p = document.querySelector("p");
// let button = document.querySelector("button");
// let input = document.querySelector("input");
// button = addEventListener("click", function () {
//   let isi = input.value;
//   console.log(isi);
//   p.innerHTML = isi;
// });

const inputList = document.getElementById("input-list");
const listInput = document.getElementById("list");

function tambah() {
  if (inputList.value === "") {
    alert("isi bang");
  } else {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "daftar-list";
    li.appendChild(checkbox);
    let namaTugas = document.createTextNode(inputList.value);
    li.appendChild(namaTugas);

    let tombolHapus = document.createElement("button");
    tombolHapus.textContent = "x";
    tombolHapus.className = "tombol-hapus";
    li.appendChild(tombolHapus);
    list.appendChild(li);

    inputList.value = "";
    li.style.listStyleType = "none";
    tombolHapus.style.listStyleType = "none";

    tombolHapus.addEventListener("click", function () {
      li.remove();
    });

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });
  }
}
