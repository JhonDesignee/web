let phone_number_input = document.querySelector("input#phone-number")
let text_input = document.querySelector("textarea#text")
let generate_button = document.querySelector("button#generate")
let copy_button = document.querySelector("button#clipboard")
let link_output = document.querySelector("input#output")

function copyToClipboard(input) {
  if (input.value == 0) {
    Framework.toast(3, "Entrada inválida!")
  } else if (! (navigator.clipboard === undefined)) {
    navigator.clipboard.writeText(input.value).then(() => {
      Framework.toast(0, "Link copiado!")
    }, () => {
      Framework.toast(3, "Erro inesperado")
    })
  } else {
    Framework.toast(3, "Não foi possível copiar o link!")
  }
}

function generateWhatsAppLink() {
  let phone_number = phone_number_input.value.trim()
  phone_number = phone_number.replace(/\D/g, "")
  let text = text_input.value.trim()

  if (phone_number.length > 0) {
    text = encodeURIComponent(text)
    let link = `https://wa.me/${phone_number}${text.length > 0 ? "?text=" + text : ""}`
    link_output.value = link
  }
}

generate_button.addEventListener("click", generateWhatsAppLink)
copy_button.addEventListener("click", () => { 
  generateWhatsAppLink()
  copyToClipboard(link_output)
})
