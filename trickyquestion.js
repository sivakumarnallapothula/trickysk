let a = document.getElementById("userInput1")
let b = document.getElementById("userInput2")
let c = document.getElementById("userInput3")
let d = document.getElementById("userInput4")
let image = document.getElementById("image")
let but = document.getElementById("but")
let code = document.getElementById("code")
let que = document.getElementById("que")



but.onclick = function() {
    if (a.value === "3" && b.value === "8" && c.value === "4" && d.value === "1") {
        image.src = "https://res.cloudinary.com/siva7482/image/upload/v1706705696/unlock-removebg-preview_k9epg1.png";
        code.style.color = "#54c74a";
        code.textContent = "PERFECT CODE"
        code.style.fontWeight = "bold"

    } else if (a.value === "" || b.value === "" || c.value === "" || d.value === "") {
        alert("Please,submit all the 4 digits code.")
    } else if (a.value !== "3" || b.value !== "8" || c.value !== "4" || d.value !== "1") {
        code.style.color = "red";
        code.textContent = "WRONG CODE"
        a.value = ""
        b.value = ""
        c.value = ""
        d.value = ""
    }
}