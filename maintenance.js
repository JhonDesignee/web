const redirect = false 

if (redirect) {
  let link = document.querySelector("script[src*=maintenance]").getAttribute("src")
  link = link.replace(".js", ".html")
  sessionStorage.setItem("current_url", window.location.href)
  window.location.href = link
}
