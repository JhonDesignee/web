class Framework {
  constructor() {
    this.#loadMainCss()
    this.#requiredInput()
    this.#dropdownMenu()
    this.#labelInput()
    this.#toastInit()
  }

  #loadMainCss() {
    let script_tag = document.querySelector("script[src*='framework'")
    let link_tag = document.createElement("link")
    try {
      let path = script_tag.getAttribute("src").replace(".js", ".css")
      link_tag.rel = "stylesheet"
      link_tag.href = path
      document.head.appendChild(link_tag)
    } catch {}
  }
  
  #requiredInput() {
    let required_input_list = document.querySelectorAll(":is(input, textarea)[required]")
    let submit_button_list = document.querySelectorAll("button[type=submit]")
    required_input_list.forEach((item) => {
      item.addEventListener("focusin", () => { item.classList.remove("invalid-input") })
      item.addEventListener("focusout", () => { Framework.testInputPattern(item) })
      item.addEventListener("input", () => { item.classList.remove("invalid-input") })
    })
    submit_button_list.forEach((item) => {
      item.addEventListener("click", () => {
        required_input_list.forEach((item) => { Framework.testInputPattern(item) })
      })
    })
  }
  
  #dropdownMenu() {
    let dropdown_menu_list = document.querySelectorAll("div.dropdown")
    dropdown_menu_list.forEach((item) => {
      let background = item.querySelector("div.background")
      let checkbox = item.querySelector("input[type=checkbox]")
      background.addEventListener("click", () => { checkbox.checked = false })
    })
  }
  
  #labelInput() {
    let input_list = document.querySelectorAll(":is(input, textarea):not([type=checkbox])")
    
    input_list.forEach((item) => {
      let label = document.querySelector(`label[for=${item.id}`)
      if (label) {
        let div = document.createElement("div")
        let parent = label.parentElement
        item.placeholder = " "
        div.classList.add("input-container")
        parent.insertBefore(div, label)
        div.appendChild(item)
        div.appendChild(label)
      }
    })
  }
  
  #toastInit() {
    let container = document.createElement("div")
    let main = document.querySelector("main")
    container.classList.add("toast-container")
    main.appendChild(container)
  }
  
  static testInputPattern(input) {
    let pattern = input.hasAttribute("pattern") ? input.pattern : input.hasAttribute("data-pattern") ? input.dataset.pattern : ".+"
    let re = new RegExp(pattern, "g")
    if (! re.test(input.value)) {
      input.classList.add("invalid-input")
    } else {
      input.classList.remove("invalid-input")
    }
  }

  static toast(type, message, milliseconds = 3000) {
    let container = document.querySelector("div.toast-container")
    let toast = document.createElement("div")
    let div_l = document.createElement("div")
    let div_r = document.createElement("div")
    let text = document.createElement("p")
    let icon = document.createElement("i")
    let close = document.createElement("i")
    icon.classList.add("fa-solid", "fa-circle-exclamation")
    text.textContent = message.trim()
    close.classList.add("fa-solid", "fa-circle-xmark")
    close.addEventListener("click", () => {
      toast.remove()
    })
    let class_type 
    switch (type) {
      case 0:
        class_type = "ok"
        break
      case 1:
        class_type = "info"
        break
      case 2:
        class_type = "warning"
        break
      case 3:
        class_type = "error"
        break
      default:
        class_type = "info"
    }
    toast.classList.add("toast", class_type)
    div_l.appendChild(icon)
    toast.appendChild(div_l)
    div_r.appendChild(text)
    toast.appendChild(div_r)
    toast.appendChild(close)
    container.appendChild(toast)
    window.setTimeout(() => {
      toast.remove()
    }, milliseconds)
    container.style.display = "flex"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const framework = new Framework()
})
