function loadMainCss() {
  let script_tag = document.querySelector("script[src*='framework'")
  let link_tag = document.createElement("link")
  
  try {
    let path = script_tag.getAttribute("src").replace("main.js", "main.css")
    link_tag.rel = "stylesheet"
    link_tag.href = path
    document.head.appendChild(link_tag)
  } catch {
    
  }
}

function dropdownMenu() {
  let dropdown_menu_list = document.querySelectorAll("div.dropdown")
   
  dropdown_menu_list.forEach((item) => {
    let background = item.querySelector("div.background")
    let checkbox = item.querySelector("input[type=checkbox]")
    
    background.addEventListener("click", () => { checkbox.checked = false })
  })
}

function testInputFieldPattern(input) {
  let pattern = input.hasAttribute("pattern") ? input.pattern : input.hasAttribute("data-pattern") ? input.dataset.pattern : ".+"
  let re = new RegExp(pattern, "g")
  
  if (! re.test(input.value)) {
    input.classList.add("invalid-input")
  } else {
    input.classList.remove("invalid-input")
  }
}

function requiredInputField() {
  let required_input_list = document.querySelectorAll(":is(input, textarea)[required]")
  let submit_button_list = document.querySelectorAll("button[type=submit]")
   
  required_input_list.forEach((item) => {
    item.addEventListener("focusout", () => {
      testInputFieldPattern(item)
    })
    
    item.addEventListener("focusin", () => { item.classList.remove("invalid-input") })
    item.addEventListener("input", () => { item.classList.remove("invalid-input") })
  })
   
  submit_button_list.forEach((item) => {
    item.addEventListener("click", () => {
      required_input_list.forEach((item) => { testInputFieldPattern(item) })
    })
  })
}

window.onload = function main() {
  dropdownMenu()
  requiredInputField()
  loadMainCss()
}
