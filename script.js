const gridContainer = document.querySelector(".container")

for (let g = 0; g < 16; ++g){
    let div = document.createElement("div");
    div.setAttribute("class","grid")
    gridContainer.appendChild(div)
}