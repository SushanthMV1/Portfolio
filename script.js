window.addEventListener("scroll", () => {
  // Calculate scroll percentage
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = Math.min((window.scrollY / scrollable) * 100, 100);
  const noScrollPercent = 100 - scrollPercent;

  // Update scroll progress bars
  document.getElementById("scrollProgress1").style.width = scrollPercent + "%";
  document.getElementById("scrollProgress2").style.width =
    noScrollPercent + "%";

  // Apply shadow to header and show/hide scroll progress bar
  const header = document.getElementById("header");
  const scrollProgress = document.getElementById("scrollProgress");
  header.style.boxShadow =
    scrollPercent > 0 ? "0rem 0.45rem 0.45rem rgba(17, 17, 17, 0.6)" : "none";
  scrollProgress.style.opacity = scrollPercent > 0 ? 1 : 0;

  // Calculate scroll degree for back-to-top button gradient
  const scrollDeg = scrollPercent * 3.6;

  // Apply gradient to back-to-top button
  document.getElementById(
    "backToTop"
  ).style.backgroundImage = `conic-gradient(#2b7a78 0deg, #2b7a78 ${scrollDeg}deg, #f5f5f5 ${scrollDeg}deg, #f5f5f5 360deg)`;
});

// window.addEventListener("scroll", () => {
//   const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//   let scrollPercent = (window.scrollY / scrollable) * 100;

//   //Scroll Progress
//   document.getElementById("scrollProgress1").style.width = scrollPercent + "%";
//   let noScrollPercent = 100 - scrollPercent;
//   noScrollPercent = scrollPercent > 100 ? 0 : noScrollPercent;
//   document.getElementById("scrollProgress2").style.width =
//     noScrollPercent + "%";

//   //Adding shadow to Navbar AND Scroll Progress
//   if (scrollPercent > 0) {
//     document.getElementById("header").style.boxShadow =
//       "0rem 0.45rem 0.45rem rgba(17, 17, 17, 0.6)";
//     document.getElementById("scrollProgress").style.opacity = 1;
//   } else {
//     document.getElementById("header").style.boxShadow = "none";
//     document.getElementById("scrollProgress").style.opacity = 0;
//   }

//   let scrollDeg = scrollPercent * 3.6;
//   document.getElementById("backToTop").style.backgroundImage =
//     "conic-gradient(#2b7a78 0deg, #2b7a78 " +
//     scrollDeg +
//     "deg, #f5f5f5 " +
//     scrollDeg +
//     "deg, #f5f5f5 360deg)"; //CODING TIP: don't forget that you SHOULDN'T add the semicolon here while styling
// });
