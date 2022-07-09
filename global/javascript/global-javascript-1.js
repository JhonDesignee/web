const dropdown_menu_list = document.querySelectorAll("div.dropdown")


dropdown_menu_list.forEach((item) => {
  let background = item.querySelector("div.background")
  let checkbox = item.querySelector("input[type=checkbox]")
  
  background.addEventListener("click", () => { checkbox.checked = false })
})
