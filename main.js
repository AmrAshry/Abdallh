const btn = document.querySelector(".mode-btn");
const overlay = document.querySelector(".overlay");
const h1 = document.querySelector("h1");
const lastp = document.querySelector(".container .info p:last-of-type");
const jobTitle = document.querySelector(".container .info p:first-of-type span");

btn.addEventListener("click", () => {
  if (
    h1.classList.contains("active") &&
    jobTitle.classList.contains("active") &&
    lastp.classList.contains("active")
  ) {
    h1.classList.remove("active");
    jobTitle.classList.remove("active");
    lastp.classList.remove("active");
    overlay.style.backgroundColor = "#e2e6f0";
    btn.innerHTML = "🌙";
  } else {
    h1.classList.add("active");
    jobTitle.classList.add("active");
    lastp.classList.add("active");
    overlay.style.backgroundColor = "#1a282c";
    btn.innerHTML = "☀️";
  }
});
const profileImg = document.querySelector(".img img");

profileImg.addEventListener("mouseenter", () => {
  profileImg.classList.add("active");
});

profileImg.addEventListener("mouseleave", () => {
  profileImg.classList.remove("active");
});
