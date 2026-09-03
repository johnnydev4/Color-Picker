

function render(input, mode, amount){

fetch (`https://www.thecolorapi.com/scheme?hex=${input}&mode=${mode}&count=${amount}`, {
method: "GET"
})

.then (res => res.json())
.then (data => {
    console.log(data)
    const html = data.colors.map(color =>{
        return `
         <div class="color-item">
                    <div class="swatch" style="background-color:${color.hex.value};"></div>
                    <p class="hex">${color.hex.value}</p>
                </div>
        `

    }).join("")

    document.querySelector(".color-grid").innerHTML = html
    
// gradiente dinámico en el body
    const secondColor = document.getElementById("seed-color").value
    const firstColor = data.colors[1].hex.value
    document.body.style.background = `linear-gradient(90deg, ${firstColor}, ${secondColor})`
    
})

}

// render color button

document.getElementById("get-btn").addEventListener("click", function(event){
    const mode = document.getElementById("color-mode").value

    if (mode === "analogic" || mode === "triad"){
    
        const currentColor = document.getElementById("seed-color").value.replace("#", "")
        const currentMode = document.getElementById("color-mode").value.toLowerCase()
        const colorAmount = "3"
        render(currentColor, currentMode, colorAmount)

    } else {
            
            const currentColor = document.getElementById("seed-color").value.replace("#", "")
            const currentMode = document.getElementById("color-mode").value.toLowerCase()
            const colorAmount = "5"
            render(currentColor, currentMode, colorAmount)

    }

})

// copy hex when click

document.addEventListener("click", function(e){
    console.log("click en:", e.target)
    if (e.target.classList.contains("hex")){
        navigator.clipboard.writeText(e.target.textContent)
        const savedHex = e.target.textContent
        e.target.textContent = "Copied!"
        setTimeout(function(){
            e.target.textContent = savedHex 
        }, 1000)
    } else if (e.target.closest(".color-item")){
        let savedHex = e.target.closest(".color-item").querySelector(".hex").textContent
        navigator.clipboard.writeText(savedHex)
        e.target.closest(".color-item").querySelector(".hex").textContent = "Copied!"
        setTimeout(function(){
            e.target.closest(".color-item").querySelector(".hex").textContent = savedHex
        }, 1000)
    }
    }
)


