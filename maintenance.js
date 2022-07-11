const redirect = true

if (redirect) {
  sessionStorage.setItem("current_url", window.location.href)
  window.location = "maintenance.html"
}
