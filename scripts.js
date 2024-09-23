const original = document.querySelector(".original")
const alternative = document.querySelector(".alternative")

let reloaded = false

function updateLayout() {
  const width = window.innerWidth
  const shouldReload =
    (width > 650 && !reloaded) || (width <= 650 && reloaded)

    original.classList.add("hide")
    alternative.classList.remove("hide")
  if (shouldReload) {
    reloaded = !reloaded
    window.location.reload()
  }
}

window.addEventListener("resize", updateLayout)



