const buttonInput = document.querySelector("button#input-button")
const buttonDropDown1 = document.querySelectorAll("div.dropdown button")[0]
const buttonDropDown2 = document.querySelectorAll("div.dropdown button")[1]
const dropDownBackground = document.querySelector("div.dropdown div.background")
const dropDownCheckbox = document.querySelector("div.dropdown input[type=checkbox]")

function GenerateLogo() {
	const input1 = document.querySelector("input#input-1")
	const input2 = document.querySelector("input#input-2")
	const lside = document.querySelector("div.container > p:first-child")
	const rside = document.querySelector("div.container > p:last-child")
	
	lside.innerText = input1.value.trim()
	rside.innerText = input2.value.trim()
}

buttonInput.addEventListener("click", GenerateLogo)
dropDownBackground.addEventListener("click", () => { dropDownCheckbox.checked = false })
