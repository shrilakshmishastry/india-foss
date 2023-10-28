function handleAccordionClick(e) {
  const controllingArea = e.target.getAttribute("aria-controls");
  let visible = e.target.getAttribute("aria-expanded");
  console.log(typeof visible);
  let actVal = visible === "true" ? true : false;
  if (actVal) {
    document.getElementById(controllingArea).className = "hidden";
  } else {
    document.getElementById(controllingArea).className = "visible";
  }
  e.target.ariaExpanded = !actVal;
}
