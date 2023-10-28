function handleBtn() {
  console.log("clicked");
}

function handleToggleBtn() {
  const toggleBtn = document.getElementById("toggle-btn");
  console.log(toggleBtn.innerText);
  if (toggleBtn.innerText === "open") {
    toggleBtn.innerText = "close";
    toggleBtn.ariaPressed = false;
  } else {
    toggleBtn.innerHTML = "open";
    toggleBtn.ariaPressed = true;
  }
}
