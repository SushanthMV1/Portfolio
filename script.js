window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercent = (window.scrollY / scrollable) * 100;

  //Adding shadow to Navbar
  if (scrollPercent > 0) {
    document.getElementById("header").style.boxShadow =
      "0rem 0.3rem 0.3rem rgba(17, 17, 17, 0.6)";
  } else {
    document.getElementById("header").style.boxShadow = "none";
  }
});

//3d Button at Submit and reset buttons in contact form
button = (id) => {
  if (id == "button1") {
    document.getElementById("button1").style.boxShadow = "0rem 0.15rem #2b7a78";
    document.getElementById("button1").style.transform = "translateY(0.15rem)";
  } else if (id == "button2") {
    document.getElementById("button2").style.boxShadow = "0rem 0.15rem #2b7a78";
    document.getElementById("button2").style.transform = "translateY(0.15rem)";
  }
};
