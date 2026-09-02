

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
        e.target.textContent = "Copiado!"
        setTimeout(function(){
            e.target.textContent = e.target.textContent   // necesitarías guardar el hex original antes de sobreescribirlo
        }, 1000)
    } else if (e.target.classList.contains("swatch")){
        navigator.clipboard.writeText(e.target.style="background-color".value)


    }
})


