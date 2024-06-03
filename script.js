document.addEventListener("DOMContentLoaded", () => {

const form1 = document.getElementById("form1")
form1.addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(form1)
  const al = +formData.get("al")
  const mp = +formData.get("mp")
  const ml = +formData.get("ml")
  const el = +formData.get("el")
  const hdtd = +formData.get("hdtd")
  const et = +formData.get("et")
  const sm = +formData.get("sm")
  const mbm = +formData.get("mbm")
  const english = +formData.get("english")
  const ecpd = +formData.get("ecpd")
  const hsf = +formData.get("hsf")
  const hr = +formData.get("hr")
  const ssc = 0.90
  if (al && mp && ml && el && hdtd && et && sm && mbm && english && ecpd && hsf && hr && ssc) {
    const creditVal = 0.121951219512195
    const result =
      creditVal * 1 * al +
      creditVal * 3 * mp +
      creditVal * 2 * ml +
      creditVal * 1 * english +
      creditVal * 2 * el +
      creditVal * 4 * hdtd +
      creditVal * 3 * et +
      creditVal * 11 * sm +
      creditVal * 3 * mbm +
      creditVal * 3 * ecpd +
      creditVal * 5 * hsf +
      creditVal * 2 * hr +
      creditVal * 1 * ssc
    document.body.textContent = ""
    const label = document.createElement("h3")
    label.textContent = "Your grade out of 5:"
    label.style.textAlign = "center"
    const res = document.createElement("h1")
    res.style.textAlign = "center"
    res.style.margin = "48px 0"
    res.textContent = `${Math.round(result * 10000) / 10000}`
    const homeBtn = document.createElement("button")
    homeBtn.addEventListener("click", () => {
      window.location.href = "?"
    })
    homeBtn.textContent = "Home"
    homeBtn.className = "btn homeBtn"
    document.body.append(label, res, homeBtn)
  }
})




  const form3 = document.getElementById("form3")
  form3.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form3)
    const nt = +formData.get("nt")
    const rm = +formData.get("rm")
    const id = +formData.get("id")
    const imd = +formData.get("imd")
    const ca = +formData.get("ca")
    const phc = +formData.get("phc")
    const rp = 0.90
    const ssc = 0.90
    if (nt && rm && id && imd && ca && phc && rp && ssc) {
      const creditVal = 0.125
      const result =
        (creditVal * 4 * nt) +
        (creditVal * 5 * rm) +
        (creditVal * 11 * id) +
        (creditVal * 2 * imd) +
        (creditVal * 10 * ca) +
        (creditVal * 4 * phc) +
        (creditVal * 3 * rp) +
        (creditVal * 1 * ssc)
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
        window.location.href = "?"
      })
      homeBtn.textContent = 'Home'
      homeBtn.className = 'btn homeBtn'
      document.body.append(label, res,homeBtn)
    }
  })
  
  show()

})

const show = ()=>{
  let currentUrl = window.location.href
  let url = new URL(currentUrl)
  let urlArg = url.searchParams.get('year')
  if (!urlArg) {
    document.getElementById("choose").style.display = "flex"
  } else if (urlArg === "1") {
    document.getElementById("label1").style.display = "block"
    document.getElementById("form1").style.display = "block"
  } else if (urlArg === "3") {
    document.getElementById("label3").style.display = "block"
    document.getElementById("form3").style.display = "block"
  }

}