// const button = document.querySelector("a.menu-icon")
// console.log(button);


// function myFunction() {
//     var x = document.getElementById("items");
//     console.log(x);
//     if (x.style.display === "flex") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "flex";
//     }
// }
// function myFunction() {
//     var x = document.getElementById("expanded");
//     console.log(x);
//     if (x.style.display === "flex") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "flex";
//     }
// }

// button.onclick = function() {
//   console.log("abcdef");
//   document.getElementsByClassName("items").classList.toggle("drop");
// };

// function myFunction() {
//     document.getElementsByClassName("nav-bar").classList.toggle("drop");
// }


// window.onclick = function (event) {
//         var dropdowns = document.getElementsByClassName("items");
//         openDropdown.classList.contains('show')
//     }
// function getSize() {
//   myWidth = window.innerWidth;
//   myHeight = window.innerHeight;
  // const menu = document.getElementById("expanded");
  // const menuIcon = document.getElementById("menu-icon");
  // if (myWidth > 912) {
  //   menu.style.display = "none";
  // }
  // else {
  //   document.addEventListener("click", (e) => {

  //     console.log(myWidth);
  //     myHeight = window.innerHeight;
  //     if (myWidth <= 912) {
  //       if (menuIcon.contains(e.target)) {
  //         // Click menu icon
  //         menu.classList.toggle("items-expanded");
  //         menu.classList.toggle("hidden");
  //         menu.style.display = "flex"
  //       } else {
  //         // Click outside menu icon
  //         if (menu.classList.contains("items-expanded")) {
  //           menu.classList.remove("items-expanded");
  //           menu.classList.add("hidden");
  //         }
  //       }
  //     }
  //     else if (menu.classList.contains("items-expanded")) {
  //       menu.classList.remove("items-expanded");
  //       menu.classList.add("hidden");
  //     }
  //   });
  // }
// };
const menu = document.getElementById("expanded");
const menuIcon = document.getElementById("menu-icon");
document.addEventListener("click", (e) => {

  if (menuIcon.contains(e.target)) {
    // Click menu icon
    menu.classList.toggle("items-expanded");
    // menu.classList.toggle("hidden");
    menu.style.display = "flex";
  } else {
    // Click outside menu icon
    if (menu.classList.contains("items-expanded")) {
      menu.classList.remove("items-expanded");
      // menu.classList.add("hidden");
      menu.style.display = "none";
    }
  }
});