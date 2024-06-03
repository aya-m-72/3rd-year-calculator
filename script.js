document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const nt = +formData.get("nt")
    const rm = +formData.get("rm")
    const id = +formData.get("id")
    const imd = +formData.get("imd")
    const ca = +formData.get("ca")
    const phc = +formData.get("phc")
    const rp = 0.90
    const ssc = 0.90
    if (nt && rm && id && imd && ca && phc && rp && ssc) {
      const result =
        (0.125 * 4 * nt) +
        (0.125 * 5 * rm) +
        (0.125 * 11 * id) +
        (0.125 * 2 * imd) +
        (0.125 * 10 * ca) +
        (0.125 * 4 * phc) +
        (0.125 * 3 * rp) +
        (0.125 * 1 * ssc)
      document.body.textContent = ""
      const label = document.createElement("h3")
      label.textContent = "Your grade out of 5:"
      label.style.textAlign = "center"
      const res = document.createElement("h1")
      res.style.textAlign = "center"
      res.style.margin = "48px 0"
      res.textContent = `${Math.round(result*10000)/10000}`
      const homeBtn = document.createElement('button')
      homeBtn.addEventListener('click',()=>{
        location.reload()
      })
      homeBtn.textContent = 'Home'
      homeBtn.className = 'btn homeBtn'
      document.body.append(label, res,homeBtn)
    }
  })
})
