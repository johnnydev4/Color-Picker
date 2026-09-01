

function render(input, mode){

fetch (`https://www.thecolorapi.com/scheme?hex=${input}&mode=${mode}&count=5`, {
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

document.getElementById("get-btn").addEventListener("click", function(event){

    // poner un if statement para los casos de triadas etc
const currentColor = document.getElementById("seed-color").value.replace("#", "")
const currentMode = document.getElementById("color-mode").value.toLowerCase()
render(currentColor, currentMode)

})



