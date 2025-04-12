function handleClick() {
  alert("Thanks for clicking!");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been submitted!");
});
