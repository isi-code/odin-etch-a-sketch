// This buttton creates divs
const button = document.createElement("button");
button.textContent = "Add grid number";
document.body.appendChild(button);

button.addEventListener("click", () => {

    let number = parseInt(prompt("Grid Number: "));
    let containerContent = document.querySelectorAll(".container div")

    if (containerContent.length > 0) {
        [...containerContent].forEach((div)=>{
            gridContainer.removeChild(div);
        })
    }

    if (number <= 100) {
        for (let g = 0; g < (number * number); ++g) {
            let div = document.createElement("div");
            div.setAttribute("class",'grid')
            div.style.flex = `1 1 ${100/number}%`;
            gridContainer.appendChild(div);
        }          
    } else {
        alert("Limit is 100")
        gridContainer.setAttribute("class","");
        
    }
})

const gridContainer = document.createElement("div");
gridContainer.setAttribute("class","container");
document.body.appendChild(gridContainer);

// Turns div blue
gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.className === "grid"){
        if(e.target.style.backgroundColor === ""){
            e.target.style.backgroundColor = "blue"; 
        } else{
            e.target.style.backgroundColor = ""; 
        }
    }
});
