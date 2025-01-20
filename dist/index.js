let nav_links = document.querySelector(".others");
let menu = document.getElementById("bars");
let cancel = document.getElementById("mark");
let fb = document.getElementById("fb");
let ig = document.getElementById("ig");
let tele = document.getElementById("tg");
let x = document.getElementById("x");
let wa = document.getElementById("wa");
let li = document.getElementById("li");
let mg = document.getElementById("mg");
let loader = document.getElementById("loader");
let all = document.getElementById("all");
let sponsor_button = document.getElementById("sponsor_button");
let yes = document.getElementById("Yes");
let no = document.getElementById("No");
let sponsor_page = document.querySelector(".sponsor");


// console.log(x);
// console.log(menu);
// console.log(cancel);

const show_Items = () => {
    if (nav_links.style.display = "none") {
        // console.log("true")
        nav_links.style.display = "block";
        menu.style.display ="none";
        cancel.style.display ="block"
      }
};

menu.addEventListener("click", show_Items);

const close_Items = () => {
    if (nav_links.style.display = "block") {
        cancel.style.display = "none";
        menu.style.display ="block";
        nav_links.style.display ="none"
      }
};

cancel.addEventListener("click", close_Items);

fb.addEventListener("click", () => {
  window.location.href = "https://facebook.com/charles.chidiebube.7m b";
});

ig.addEventListener("click", () => {
  window.location.href = "";
});

tg.addEventListener("click", () => {
  window.location.href = "https://t.me/ebubecharles";
});

x.addEventListener("click", () => {
  window.location.href = "https://x.com/Chidiebube94783?s=09";
});

wa.addEventListener("click", () => {
  window.location.href = "wa.link.ikzbzu";
});

li.addEventListener("click", () => {
  window.location.href = "https://www.linkedin.com/in/chidiebube-charles-17039b342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appn";
});

mg.addEventListener("click", () => {
  window.location.href = "";
});


let ShowLoader = () => {
  setTimeout(() => {
      loader.style.display = "none";
      all.style.display = "block"
  }, 1000);
};

ShowLoader();

sponsor_button.addEventListener("click", () => {
  sponsor_page.style.display = "block";
  all.style.opacity = "40%"
});

yes.addEventListener("click", () => {
  sponsor_page.style.display = "none";
  // Window.location.href = "";
  all.style.opacity = "100%"
});

no.addEventListener("click", () => {
  sponsor_page.style.display = "none";
  all.style.opacity = "100%"
});