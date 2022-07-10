const l_input = document.querySelector("input#input-1")
const r_input = document.querySelector("input#input-2")
const l_output = document.querySelectorAll("div.output p")[0]
const r_output = document.querySelectorAll("div.output p")[1]
const button = document.querySelector("button#input-button")

function generateLogo() {
  let l_input_value = l_input.value.trim()
  let r_input_value = r_input.value.trim()
  
  if (l_input_value.length || r_input_value.length) {
    l_output.innerText = l_input_value
    r_output.innerText = r_input_value
  }
}

button.addEventListener("click", generateLogo)
