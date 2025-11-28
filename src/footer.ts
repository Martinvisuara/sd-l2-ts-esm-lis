export function footerComponent() {
  const footer = document.createElement("footer");

  footer.innerHTML = "<p>© 2025 Mi Portfolio</p>";
  footer.style.border = "solid 3px black";
  footer.style.padding = "12px";
  footer.style.textAlign = "center";

  return footer;
}
