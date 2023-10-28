const handleTabPress = (e) => {
  console.log("shri");

  console.log(document.querySelector('[aria-selected="true"]'));
  document
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);
  e.target.setAttribute("aria-selected", true);

  document.getElementsByClassName("active")[0].className = "non-active";
  e.target.className = "active";
  document.getElementsByClassName("visible")[0].className = "hidden";
  document.getElementById(e.target.dataset.id).className = "visible";
};

const btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", () => {
  console.log("lakshmi");
});
