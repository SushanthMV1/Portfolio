window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercent = (window.scrollY / scrollable) * 100;

  //Scroll Progress
  document.getElementById("scrollProgress1").style.width = scrollPercent + "%";
  let noScrollPercent = 100 - scrollPercent;
  noScrollPercent = scrollPercent > 100 ? 0 : noScrollPercent; //Understand This
  document.getElementById("scrollProgress2").style.width =
    noScrollPercent + "%";

  //Adding shadow to Navbar AND Scroll Progress
  if (scrollPercent > 0) {
    document.getElementById("header").style.boxShadow =
      "0rem 0.45rem 0.45rem rgba(17, 17, 17, 0.6)";
    document.getElementById("scrollProgress").style.opacity = 1;
  } else {
    document.getElementById("header").style.boxShadow = "none";
    document.getElementById("scrollProgress").style.opacity = 0;
  }
});

//3d Button at Submit and reset buttons in contact form
// button = (id) => {
//   if (id == "button1") {
//     document.getElementById("button1").style.boxShadow = "0rem 0.15rem #2b7a78";
//     document.getElementById("button1").style.transform = "translateY(0.15rem)";
//   } else if (id == "button2") {
//     document.getElementById("button2").style.boxShadow = "0rem 0.15rem #2b7a78";
//     document.getElementById("button2").style.transform = "translateY(0.15rem)";
//   }
// };
