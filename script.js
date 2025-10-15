const gridContainer = document.querySelector(".container")

for (let g = 0; g < 16; ++g){
    let div = document.createElement("div");
    div.setAttribute("class","grid");
    gridContainer.appendChild(div);
}

gridContainer.addEventListener("mouseover", (e) => {
    if(e.target.style.backgroundColor === "" ||e.target.style.backgroundColor === "white"){
        e.target.setAttribute("style", "background-color: blue;")
    }else{
        e.target.setAttribute("style", "")
    }
});
