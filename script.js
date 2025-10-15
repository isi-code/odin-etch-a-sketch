const button = document.createElement("button");
button.textContent = "Add grid number";
document.body.appendChild(button);

button.addEventListener("click", () => {

    let number = parseInt(prompt("Grid Number: "));
    document.body.appendChild(gridContainer);

    for (let g = 0; g < number; ++g) {
        let div = document.createElement("div");
        div.setAttribute("class","grid");
        gridContainer.appendChild(div);
    }

})

const gridContainer = document.createElement("div");
gridContainer.setAttribute("class","container");

gridContainer.addEventListener("mouseover", (e) => {
    if(e.target.style.backgroundColor === "" ||e.target.style.backgroundColor === "white"){
        e.target.setAttribute("style", "background-color: blue;")
    }else{
        e.target.setAttribute("style", "")
    }
});
