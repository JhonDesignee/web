const dropDownBackground = document.querySelector("div.dropdown div.background")
const dropDownCheckbox = document.querySelector("div.dropdown input[type=checkbox]")
const buttonDropDown1 = document.querySelectorAll("div.dropdown button")[0]
const buttonDropDown2 = document.querySelectorAll("div.dropdown button")[1]

dropDownBackground.addEventListener("click", () => { dropDownCheckbox.checked = false })
buttonDropDown1.addEventListener("click", () => {
  window.open("https://jhondesignee.github.io/web/pages/git-hub", "_self")
})
buttonDropDown2.addEventListener("click", () => {
  window.open("https://jhondesignee.github.io/web/pages/gerador-de-link-whatsapp", "_self")
})

// const input = document.getElementById("input")
// const output = document.getElementById("output")
// const re = ".*?(?=§r|$.*?)"

// function SecureText(text) {
// 	const chars = [
// 		["<", "&lt;"],
// 		[">", "&gt;"],
// 		["/", "&sol;"],
// 		["\\", "&bsol;"],
// 	]
	
// 	for (let char of chars) {
// 		text = text.replaceAll(char[0], char[1])
// 	}
	
// 	return text
// }

// function RandomString(chars, length) {
// 	var text = ""
	
// 	for (let n = 0; n < length; n++) {
// 		text += chars.charAt(Math.floor(Math.random() * chars.length));
// 	}
	
// 	return text
// }

// function FormatText() {
// 	var text = input.value
	
// 	text = SecureText(text)
// 	for (let value of data["format_table"]) {
// 		matches = text.matchAll(new RegExp(value[0].slice(0, 2) + re, "g"))
		
// 		if (value[0].slice(0, 2) == "§k") {
// 			for (let match of matches) {
// 				text = text.replace(match, RandomString("defghqouy", match[0].slice(2).length))
// 			}
// 		} else if (value[0].slice(0, 2) == "§l") {
// 			for (let match of matches) {
// 				text = text.replace(match, `<b>${match[0].slice(2)}</b>`)
// 			}
// 		} else if (value[0].slice(0, 2) == "§m") {
// 			for (let match of matches) {
// 				text = text.replace(match, `<s>${match[0].slice(2)}</s>`)
// 			}
// 		} else if (value[0].slice(0, 2) == "§n") {
// 			for (let match of matches) {
// 				text = text.replace(match, `<u>${match[0].slice(2)}</u>`)
// 			}
// 		} else if (value[0].slice(0, 2) == "§o") {
// 			for (let match of matches) {
// 				text = text.replace(match, `<i>${match[0].slice(2)}</i>`)
// 			}
// 		}
//   } 
// 	for (let value of data["color_table"]) {
// 		matches = text.matchAll(new RegExp(value[0].slice(0, 2) + re, "g"))
// 		for (let match of matches) {
// 			text = text.replace(match, `<span style="color: ${value[1]}">${match[0].slice(2)}</span>`)
// 		}
// 	} 
// 	text = text.replaceAll("§r", "")
// 	text = text.replaceAll("\n", " ")
// 	output.innerHTML = text
// }

// setInterval(FormatText, 50)
