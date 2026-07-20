const btnDetail = document.querySelector(".btn-detail");
const btnWatchlist = document.querySelector(".btn-watchlist");
const btnHearts = document.querySelectorAll(".btn-heart");

btnDetail.addEventListener("click", () => {
  if (btnDetail.classList.contains("bg-amber-600")) {
    btnDetail.classList.remove("bg-amber-600");
    btnDetail.classList.add("bg-amber-800");
  } else {
    btnDetail.classList.remove("bg-amber-800");
    btnDetail.classList.add("bg-amber-600");
  }
});

btnWatchlist.addEventListener("click", () => {
  if (btnWatchlist.classList.contains("bg-white/10")) {
    btnWatchlist.classList.remove("bg-white/10");
    btnWatchlist.classList.add("bg-white/30");
  } else {
    btnWatchlist.classList.remove("bg-white/30");
    btnWatchlist.classList.add("bg-white/10");
  }
});

btnHearts.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    
    const svg = btn.querySelector("svg");
    
    if (svg.getAttribute("fill") === "none" || !svg.getAttribute("fill")) {
      svg.setAttribute("fill", "#FBBF24");
    } else {
      svg.setAttribute("fill", "none");
    }
  });
});

const navLinks = document.querySelectorAll(".nav-links li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {

    navLinks.forEach((item) => {
      item.classList.remove("text-white");
    });
    
    link.classList.add("text-white");
  });
});