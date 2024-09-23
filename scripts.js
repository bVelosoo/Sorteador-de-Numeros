const original = document.querySelector(".original")
const alternative = document.querySelector(".alternative")

window.addEventListener("resize", updateLayout)

function updateLayout() {
  const width = window.innerWidth
  const shouldReload =
    (width > 650 && !reloaded) || (width <= 650 && reloaded)

  if (shouldReload) {
    original.classList.add("hide")
    alternative.classList.remove("hide")
  } else {
    original.classList.remove("hide")
    alternative.classList.add("hide")
  }
}
updateLayout()


